import React, { useState, useEffect, useMemo } from 'react';
import TemplateCard from '../components/TemplateCard';
import HomeSearch from '../components/HomeSearch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import homeImg from '../images/homeImg.png'; // Import the image

function Home() {
  // Dummy data for categories and template cards (replace this with actual data)
  const [filteredTemplates, setFilteredTemplates] = useState([]);

  const categoryData = [
    { id: 1, title: 'Business', description: 'Business templates for various industries.' },
    { id: 2, title: 'Education', description: 'Educational templates for teachers and students.' },
    { id: 3, title: 'Healthcare', description: 'Healthcare templates for medical professionals.' },
    { id: 4, title: 'Technology', description: 'Technology-related templates for IT professionals.' },
    { id: 5, title: 'Finance', description: 'Finance templates for financial analysts and accountants.' },
    { id: 6, title: 'Marketing', description: 'Marketing templates for marketing professionals.' },
    { id: 7, title: 'Design', description: 'Design templates for graphic designers and artists.' },
    { id: 8, title: 'Hospitality', description: 'Hospitality templates for hotels and restaurants.' },
    { id: 9, title: 'Engineering', description: 'Engineering templates for engineers and architects.' },
    { id: 10, title: 'Fashion', description: 'Fashion templates for fashion designers and stylists.' }
    // Add more categories as needed
  ];


  const templateData = useMemo(() => [
    {
      id: 1,
      title: 'Marketing Strategy',
      description: 'A comprehensive marketing strategy template for businesses.',
      imageUrl: 'https://source.unsplash.com/random?1',
      category: 'Marketing',
      format: 'PPT',
      dateUpdated: '2024-04-14',
    },
    {
      id: 2,
      title: 'Budget Planner',
      description: 'An Excel template for managing personal and business budgets.',
      imageUrl: 'https://source.unsplash.com/random?2',
      category: 'Finance',
      format: 'XLS',
      dateUpdated: '2024-04-15',
    },
    {
      id: 3,
      title: 'Lesson Plan',
      description: 'A lesson plan template for teachers to organize classroom activities.',
      imageUrl: 'https://source.unsplash.com/random?3',
      category: 'Education',
      format: 'Docs',
      dateUpdated: '2024-04-16',
    },
    {
      id: 4,
      title: 'Project Proposal',
      description: 'A project proposal template for presenting project ideas to stakeholders.',
      imageUrl: 'https://source.unsplash.com/random?4',
      category: 'Business',
      format: 'PDF',
      dateUpdated: '2024-04-17',
    },
    {
      id: 5,
      title: 'Meeting Agenda',
      description: 'An agenda template for organizing meetings and setting objectives.',
      imageUrl: 'https://source.unsplash.com/random?5',
      category: 'Business',
      format: 'Docs',
      dateUpdated: '2024-04-18',
    },
    {
      id: 6,
      title: 'Resume Template',
      description: 'A professional resume template for job seekers to showcase their skills and experience.',
      imageUrl: 'https://source.unsplash.com/random?6',
      category: 'Career',
      format: 'Docs',
      dateUpdated: '2024-04-19',
    },
    {
      id: 7,
      title: 'Recipe Card',
      description: 'A recipe card template for organizing and sharing cooking recipes.',
      imageUrl: 'https://source.unsplash.com/random?7',
      category: 'Food',
      format: 'PDF',
      dateUpdated: '2024-04-20',
    },
    {
      id: 8,
      title: 'Travel Itinerary',
      description: 'A travel itinerary template for planning trips and keeping track of reservations.',
      imageUrl: 'https://source.unsplash.com/random?8',
      category: 'Travel',
      format: 'Docs',
      dateUpdated: '2024-04-21',
    },
    {
      id: 9,
      title: 'Fitness Plan',
      description: 'A fitness plan template for setting fitness goals and tracking progress.',
      imageUrl: 'https://source.unsplash.com/random?9',
      category: 'Health',
      format: 'PDF',
      dateUpdated: '2024-04-22',
    },
    {
      id: 10,
      title: 'Project Timeline',
      description: 'A project timeline template for visualizing project milestones and deadlines.',
      imageUrl: 'https://source.unsplash.com/random?10',
      category: 'Business',
      format: 'PPT',
      dateUpdated: '2024-04-23',
    },
    {
      id: 11,
      title: 'Sales Report',
      description: 'A sales report template for analyzing sales performance and trends.',
      imageUrl: 'https://source.unsplash.com/random?11',
      category: 'Business',
      format: 'XLS',
      dateUpdated: '2024-04-24',
    },
    {
      id: 12,
      title: 'Invoice Template',
      description: 'An invoice template for generating professional invoices for products or services.',
      imageUrl: 'https://source.unsplash.com/random?12',
      category: 'Finance',
      format: 'Docs',
      dateUpdated: '2024-04-25',
    },
    {
      id: 13,
      title: 'Daily Planner',
      description: 'A daily planner template for organizing daily tasks and appointments.',
      imageUrl: 'https://source.unsplash.com/random?13',
      category: 'Productivity',
      format: 'PDF',
      dateUpdated: '2024-04-26',
    },
    {
      id: 14,
      title: 'Social Media Calendar',
      description: 'A social media calendar template for planning and scheduling social media posts.',
      imageUrl: 'https://source.unsplash.com/random?14',
      category: 'Marketing',
      format: 'XLS',
      dateUpdated: '2024-04-27',
    },
    {
      id: 15,
      title: 'Survey Template',
      description: 'A survey template for conducting surveys and collecting feedback from respondents.',
      imageUrl: 'https://source.unsplash.com/random?15',
      category: 'Research',
      format: 'Docs',
      dateUpdated: '2024-04-28',
    },
    {
      id: 16,
      title: 'Meeting Minutes',
      description: 'A meeting minutes template for documenting meeting discussions and decisions.',
      imageUrl: 'https://source.unsplash.com/random?16',
      category: 'Business',
      format: 'PDF',
      dateUpdated: '2024-04-29',
    },
    {
      id: 17,
      title: 'Event Planning Checklist',
      description: 'An event planning checklist template for organizing and managing events.',
      imageUrl: 'https://source.unsplash.com/random?17',
      category: 'Events',
      format: 'Docs',
      dateUpdated: '2024-04-30',
    },
    {
      id: 18,
      title: 'Business Plan',
      description: 'A business plan template for entrepreneurs and startups to outline business goals and strategies.',
      imageUrl: 'https://source.unsplash.com/random?18',
      category: 'Business',
      format: 'PPT',
      dateUpdated: '2024-05-01',
    },
    {
      id: 19,
      title: 'Employee Evaluation Form',
      description: 'An employee evaluation form template for assessing employee performance and providing feedback.',
      imageUrl: 'https://source.unsplash.com/random?19',
      category: 'Human Resources',
      format: 'Docs',
      dateUpdated: '2024-05-02',
    },
    {
      id: 20,
      title: 'Website Wireframe',
      description: 'A website wireframe template for planning website layouts and structures.',
      imageUrl: 'https://source.unsplash.com/random?20',
      category: 'Web Design',
      format: 'PDF',
      dateUpdated: '2024-05-03',
    },
    {
      id: 21,
      title: 'Mobile App UI Kit',
      description: 'A UI kit for designing mobile applications with various screen layouts and components.',
      imageUrl: 'https://source.unsplash.com/random?21',
      category: 'Mobile App Development',
      format: 'Sketch',
      dateUpdated: '2024-05-05',
    },
    {
      id: 22,
      title: 'Product Packaging Design',
      description: 'Product packaging design templates for packaging various products.',
      imageUrl: 'https://source.unsplash.com/random?22',
      category: 'Graphic Design',
      format: 'AI',
      dateUpdated: '2024-05-07',
    },
    {
      id: 23,
      title: 'Social Media Marketing Plan',
      description: 'A marketing plan template for social media campaigns and strategies.',
      imageUrl: 'https://source.unsplash.com/random?23',
      category: 'Marketing',
      format: 'DOCX',
      dateUpdated: '2024-05-10',
    },
    {
      id: 24,
      title: 'Recipe Book Template',
      description: 'A template for creating recipe books with various recipes and categories.',
      imageUrl: 'https://source.unsplash.com/random?24',
      category: 'Food & Beverage',
      format: 'InDesign',
      dateUpdated: '2024-05-12',
    },
    {
      id: 25,
      title: 'Event Poster Design',
      description: 'Poster design templates for promoting events and gatherings.',
      imageUrl: 'https://source.unsplash.com/random?25',
      category: 'Event Planning',
      format: 'PSD',
      dateUpdated: '2024-05-15',
    },
    {
      id: 26,
      title: 'Music Album Cover Design',
      description: 'Album cover design templates for music albums and singles.',
      imageUrl: 'https://source.unsplash.com/random?26',
      category: 'Music',
      format: 'CDR',
      dateUpdated: '2024-05-17',
    },
    {
      id: 27,
      title: 'Employee Onboarding Checklist',
      description: 'A checklist template for onboarding new employees into the organization.',
      imageUrl: 'https://source.unsplash.com/random?27',
      category: 'Human Resources',
      format: 'XLSX',
      dateUpdated: '2024-05-20',
    },
    {
      id: 28,
      title: 'Travel Brochure Template',
      description: 'Brochure design templates for promoting travel destinations and packages.',
      imageUrl: 'https://source.unsplash.com/random?28',
      category: 'Travel & Tourism',
      format: 'Publisher',
      dateUpdated: '2024-05-22',
    },
    {
      id: 29,
      title: 'Fitness Workout Plan',
      description: 'A workout plan template for creating personalized fitness routines.',
      imageUrl: 'https://source.unsplash.com/random?29',
      category: 'Fitness & Exercise',
      format: 'PDF',
      dateUpdated: '2024-05-25',
    },
    {
      id: 30,
      title: 'Budget Tracking Spreadsheet',
      description: 'A spreadsheet template for tracking personal or business budgets.',
      imageUrl: 'https://source.unsplash.com/random?30',
      category: 'Finance',
      format: 'Excel',
      dateUpdated: '2024-05-27',
    },
    {
      id: 31,
      title: 'Music',
      description: 'A spreadsheet template for tracking personal or business budgets.',
      imageUrl: 'https://source.unsplash.com/random?31',
      category: 'Finance',
      format: 'Excel',
      dateUpdated: '2024-05-27',
    },
    {
      id: 32,
      title: 'Art',
      description: 'A spreadsheet template for tracking personal or business budgets.',
      imageUrl: 'https://source.unsplash.com/random?32',
      category: 'Finance',
      format: 'Excel',
      dateUpdated: '2024-05-27',
    },
  ], []);
  // Empty dependency array ensures the data is memoized

  useEffect(() => {
    setFilteredTemplates(templateData); // Set initial state with all templates
  }, [templateData]); // Added templateData to the dependency array

  // Function to handle search
  const handleSearch = (filters) => {
    // Perform filtering based on search filters
    const filtered = templateData.filter(template => {
      // Check if template title or description matches search query
      const titleMatch = template.title.toLowerCase().includes(filters.query.toLowerCase());
      const descMatch = template.description.toLowerCase().includes(filters.query.toLowerCase());

      // Check if category matches selected category
      const categoryMatch = !filters.category || template.category === filters.category;

      // Check if file format matches selected file format
      const fileFormatMatch = !filters.fileFormat || template.format === filters.fileFormat;

      // Check if date updated matches selected date
      const dateMatch = !filters.dateUpdated || template.dateUpdated === filters.dateUpdated;

      // Return true only if all conditions are met
      return (titleMatch || descMatch) && categoryMatch && fileFormatMatch && dateMatch;
    });

    setFilteredTemplates(filtered);
  };

  return (
    <div>
      <Header />
      <main className="homeMain">
        <div className="row">
          <div className="col-7">
            <div className="homeContent">
              <div className="homeContentContainer">
                <div className="homeGreet">Hi ! we’re</div>
                <div className="homeCompany">Temply.</div>
                <div className="homeMessage">We make beautiful looking professional templates for you</div>
                <div className="templateBtn"><Link to="/templates" className="nav-link">Browse a template</Link></div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="homeImage">
              <img src={homeImg} alt="" />
            </div>
          </div>
        </div>
      </main>
      <div className="row homeMid">
        <div className="homeMidHeading">
          <h1>Explore the world's leading design templates</h1>
        </div>
        <div className="homeMidDesc">
          <p>Millions of designers and agencies around the world showcase their template work on Temply - the home to the world's best design and creative professionals.</p>
        </div>
        <div className="homeMidSearch">
          <HomeSearch categories={categoryData} onSearch={handleSearch} />
        </div>
        <div className="homeMidCategories">
          <div className="row">
            {categoryData.map((category) => (
              <div key={category.id} className="col">
                <div className="homeCatBtn">
                  <Link to={`/templates`} className="nav-link">{category.title}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="row homeBottom">
        <div className="row homeTemplates">
          {filteredTemplates.map(template => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </section>
      <Footer /> {/* Add Footer */}
    </div >
  );
}

export default Home;
