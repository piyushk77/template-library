import { useNavigate } from 'react-router-dom';

function TemplateCard({ template }) {
  const navigate = useNavigate();

  const handlePreview = () => {
    // Navigate to the preview page or open a modal as needed
    navigate(`/preview/${template.id}`);
  };

  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={template.imageUrl} className="card-img-top" alt={template.title} />
        <div className="card-body">
          <h5 className="card-title">{template.title}</h5>
          <p className="card-text">{template.description}</p>
          <button type="button" className="btn btn-primary" onClick={handlePreview}>Preview</button>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;
