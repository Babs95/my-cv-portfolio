import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// Set up fonts - the fonts are directly in the pdfFonts object
// Extract only the font files (those ending with .ttf)
const vfs = {};
Object.keys(pdfFonts).forEach(key => {
  if (key.endsWith('.ttf')) {
    vfs[key] = pdfFonts[key];
  }
});

pdfMake.vfs = vfs;

export const generatePDF = async (language, data, translations) => {

  try {
    // Generate filename
    const date = new Date();
    const months = {
      fr: ['JANVIER', 'FEVRIER', 'MARS', 'AVRIL', 'MAI', 'JUIN',
           'JUILLET', 'AOUT', 'SEPTEMBRE', 'OCTOBRE', 'NOVEMBRE', 'DECEMBRE'],
      en: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
           'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
    };
    const currentMonth = months[language][date.getMonth()];
    const currentYear = date.getFullYear();
    const langSuffix = language.toUpperCase();
    const filename = `CV_Babacar_NDIAYE_${currentMonth}_${currentYear}_${langSuffix}.pdf`;

    // Helper function to strip HTML
    const stripHtml = (html) => {
      if (!html) return '';
      return html
        .replace(/<strong>/g, '')
        .replace(/<\/strong>/g, '')
        .replace(/<br>/g, '\n')
        .replace(/<br\/>/g, '\n')
        .replace(/<[^>]*>/g, '');
    };

    // Define document structure
    const docDefinition = {
      pageSize: 'A4',
      pageMargins: [0, 0, 0, 0],
      content: [
        // Header
        {
          table: {
            widths: ['*'],
            body: [[
              {
                stack: [
                  {
                    text: data.personalInfo.name,
                    style: 'header',
                    alignment: 'center',
                    margin: [0, 25, 0, 8]
                  },
                  {
                    text: data.personalInfo.title,
                    style: 'jobTitle',
                    alignment: 'center',
                    margin: [0, 0, 0, 15]
                  },
                  {
                    columns: [
                      {
                        text: [
                          { text: '📱 ', font: 'Roboto' },
                          data.personalInfo.phone
                        ],
                        style: 'contactItem',
                        alignment: 'center'
                      },
                      {
                        text: [
                          { text: '✉️ ', font: 'Roboto' },
                          data.personalInfo.email
                        ],
                        style: 'contactItem',
                        alignment: 'center'
                      },
                      {
                        text: [
                          { text: '📍 ', font: 'Roboto' },
                          data.personalInfo.location
                        ],
                        style: 'contactItem',
                        alignment: 'center'
                      }
                    ],
                    margin: [0, 0, 0, 25]
                  }
                ],
                fillColor: '#0a66c2',
                color: '#ffffff'
              }
            ]]
          },
          layout: 'noBorders'
        },

        // Content sections
        ...generateContentSections(data, translations, stripHtml)
      ],
      styles: {
        header: {
          fontSize: 23,
          bold: true,
          color: '#ffffff'
        },
        jobTitle: {
          fontSize: 12,
          color: '#ffffff'
        },
        contactItem: {
          fontSize: 8.5,
          color: '#ffffff'
        },
        sectionTitle: {
          fontSize: 13,
          bold: true,
          color: '#0a66c2',
          margin: [40, 12, 40, 10]
        },
        sectionTitleBorder: {
          margin: [40, 0, 40, 0]
        },
        profileText: {
          fontSize: 9.5,
          alignment: 'justify',
          lineHeight: 1.6,
          color: '#555555',
          margin: [40, 0, 40, 0]
        },
        experienceItem: {
          margin: [40, 0, 40, 12]
        },
        jobTitleText: {
          fontSize: 10.5,
          bold: true,
          color: '#0a66c2',
          margin: [0, 0, 0, 4]
        },
        company: {
          fontSize: 9.5,
          bold: true,
          color: '#333333',
          margin: [0, 0, 0, 2]
        },
        period: {
          fontSize: 8.5,
          color: '#666666',
          italics: true,
          margin: [0, 0, 0, 8]
        },
        location: {
          fontSize: 8,
          color: '#888888',
          margin: [0, 0, 0, 8]
        },
        description: {
          fontSize: 9.3,
          color: '#555555',
          lineHeight: 1.5
        },
        techStack: {
          fontSize: 8.5,
          color: '#0a66c2',
          margin: [0, 6, 0, 0]
        },
        achievementItem: {
          fontSize: 9,
          color: '#555555',
          lineHeight: 1.5,
          margin: [0, 0, 0, 3]
        },
        skillCategory: {
          fontSize: 9.5,
          bold: true,
          color: '#0a66c2',
          margin: [0, 0, 0, 6]
        },
        skillItem: {
          fontSize: 9,
          color: '#555555',
          margin: [0, 0, 0, 3]
        },
        formationItem: {
          fontSize: 9.5,
          color: '#555555',
          lineHeight: 1.5,
          margin: [0, 0, 0, 10]
        },
        languageItem: {
          fontSize: 9,
          color: '#555555',
          margin: [0, 3, 0, 3]
        },
        link: {
          fontSize: 8.5,
          color: '#0a66c2',
          decoration: 'underline'
        }
      },
      defaultStyle: {
        font: 'Roboto'
      }
    };

    // Generate and download PDF
    pdfMake.createPdf(docDefinition).download(filename);

    return true;
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw error;
  }
};

// Helper function to generate content sections
function generateContentSections(data, translations, stripHtml) {
  const sections = [];

  // Profile Section
  sections.push(
    { text: data.profile.title, style: 'sectionTitle' },
    {
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#0a66c2' }],
      margin: [40, 0, 40, 10]
    },
    { text: data.profile.text, style: 'profileText' }
  );

  // Skills Section
  sections.push(
    { text: data.skills.title, style: 'sectionTitle' },
    {
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#0a66c2' }],
      margin: [40, 0, 40, 10]
    },
    {
      columns: [
        {
          width: '50%',
          stack: data.skills.categories.slice(0, Math.ceil(data.skills.categories.length / 2)).map(cat => ({
            stack: [
              { text: cat.name, style: 'skillCategory', margin: [40, 0, 0, 6] },
              {
                ul: cat.items.map(item => ({ text: item, style: 'skillItem' })),
                margin: [40, 0, 0, 12]
              }
            ]
          }))
        },
        {
          width: '50%',
          stack: data.skills.categories.slice(Math.ceil(data.skills.categories.length / 2)).map(cat => ({
            stack: [
              { text: cat.name, style: 'skillCategory', margin: [0, 0, 40, 6] },
              {
                ul: cat.items.map(item => ({ text: item, style: 'skillItem' })),
                margin: [0, 0, 40, 12]
              }
            ]
          }))
        }
      ]
    }
  );

  // Experience Section
  sections.push(
    { text: translations.experienceTitle, style: 'sectionTitle' },
    {
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#0a66c2' }],
      margin: [40, 0, 40, 10]
    }
  );

  data.experiences.forEach((exp, index) => {
    const expSection = {
      stack: [
        { text: exp.title, style: 'jobTitleText' },
        { text: exp.company, style: 'company' },
        { text: exp.period, style: 'period' },
        { text: exp.location, style: 'location' },
        { text: exp.description, style: 'description' }
      ],
      style: 'experienceItem'
    };

    if (exp.tech) {
      expSection.stack.push({ text: exp.tech, style: 'techStack' });
    }

    if (exp.achievements && exp.achievements.length > 0) {
      expSection.stack.push({
        ul: exp.achievements.map(ach => ({
          text: stripHtml(ach),
          style: 'achievementItem'
        })),
        margin: [0, 6, 0, 0]
      });
    }

    if (exp.subtitle && exp.projects) {
      expSection.stack.push(
        { text: exp.subtitle, style: 'company', margin: [0, 8, 0, 8] },
        ...exp.projects.map(project => ({
          stack: [
            {
              text: [
                { text: '• ' },
                { text: `${project.name} ${project.period}`, bold: true, color: '#0a66c2' }
              ],
              margin: [0, 0, 0, 3]
            },
            { text: project.description, fontSize: 9, color: '#555555', margin: [8, 0, 0, 3] },
            { text: project.tech, fontSize: 8.5, color: '#666666', margin: [8, 0, 0, 3] },
            { text: project.url, link: project.url, style: 'link', margin: [8, 0, 0, 4] }
          ]
        }))
      );
    }

    if (index < data.experiences.length - 1 && !exp.subtitle) {
      expSection.stack.push({
        canvas: [{ type: 'line', x1: 0, y1: 10, x2: 515, y2: 10, lineWidth: 1, lineColor: '#e0e0e0' }]
      });
    }

    sections.push(expSection);
  });

  // Teaching Section
  sections.push(
    { text: translations.teachingTitle, style: 'sectionTitle' },
    {
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#0a66c2' }],
      margin: [40, 0, 40, 10]
    }
  );

  data.teaching.forEach((teach, index) => {
    sections.push({
      stack: [
        { text: teach.title, style: 'jobTitleText' },
        { text: teach.company, style: 'company' },
        { text: teach.period, style: 'period' },
        {
          ul: teach.achievements.map(ach => ({
            text: stripHtml(ach),
            style: 'achievementItem'
          })),
          margin: [0, 6, 0, 0]
        },
        index < data.teaching.length - 1 ? {
          canvas: [{ type: 'line', x1: 0, y1: 10, x2: 515, y2: 10, lineWidth: 1, lineColor: '#e0e0e0' }]
        } : {}
      ],
      style: 'experienceItem'
    });
  });

  // Education Section
  sections.push(
    { text: translations.educationTitle, style: 'sectionTitle' },
    {
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#0a66c2' }],
      margin: [40, 0, 40, 10]
    }
  );

  data.education.forEach(edu => {
    sections.push({
      text: [
        { text: edu.title, bold: true },
        { text: ` | ${edu.school} | ${edu.period} | ${edu.location}` }
      ],
      style: 'formationItem',
      margin: [40, 0, 40, 10]
    });
  });

  // Languages Section
  sections.push(
    { text: translations.languagesTitle, style: 'sectionTitle' },
    {
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#0a66c2' }],
      margin: [40, 0, 40, 10]
    }
  );

  sections.push({
    table: {
      widths: ['*', 70],
      body: data.languages.map(lang => [
        {
          text: lang.name,
          fontSize: 9,
          color: '#555555',
          margin: [0, 3, 0, 3],
          border: [false, false, false, false]
        },
        {
          text: lang.level,
          fontSize: 9,
          color: '#555555',
          bold: true,
          margin: [0, 3, 0, 3],
          border: [false, false, false, false]
        }
      ])
    },
    layout: 'noBorders',
    margin: [40, 0, 40, 0]
  });

  // Links Section
  sections.push(
    { text: translations.linksTitle, style: 'sectionTitle' },
    {
      canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#0a66c2' }],
      margin: [40, 0, 40, 10]
    },
    {
      text: data.links.map((link, index) => [
        index > 0 ? { text: ' | ', color: '#555555' } : '',
        { text: link.pdfName || link.name, link: link.url, style: 'link' }
      ]).flat().filter(Boolean),
      margin: [40, 0, 40, 12],
      fontSize: 8.5,
      lineHeight: 1.6
    }
  );

  return sections;
}
