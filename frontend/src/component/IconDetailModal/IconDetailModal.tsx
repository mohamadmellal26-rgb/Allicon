import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Download, Copy, ExternalLink, Check, ArrowLeft } from 'lucide-react';

interface IconItem {
  ID: number;
  filename: string;
  file_path: string;
}

export const IconDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [icon, setIcon] = useState<IconItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    fetchIconDetails();
  }, [id]);

  const fetchIconDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/icons');
      if (!response.ok) {
        throw new Error('Failed to fetch from server');
      }
      const data: IconItem[] = await response.json();
      const found = data.find(item => item.ID === Number(id));
      if (found) {
        setIcon(found);
      }
    } catch (error) {
      console.error("Error fetching icon details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    if (icon) {
      navigator.clipboard.writeText(icon.file_path);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return <div style={{ padding: '60px', textAlign: 'center', fontFamily: 'sans-serif' }}>Loading icon details...</div>;
  }

  if (!icon) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>Icon not found!</h2>
        <button onClick={() => navigate(-1)} style={{ marginTop: '15px', padding: '8px 16px', cursor: 'pointer' }}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px 20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {/* زر الرجوع */}
      <button 
        onClick={() => navigate(-1)} 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px', 
          background: 'none', 
          border: 'none', 
          cursor: 'pointer', 
          fontSize: '14px', 
          fontWeight: 'bold', 
          color: '#333',
          marginBottom: '20px' 
        }}
      >
        <ArrowLeft size={16} />
        <span>Back</span>
      </button>

      {/* صندوق التفاصيل الرئيسي */}
      <div style={{ 
        background: '#fff', 
        border: '1px solid #eaeaea', 
        borderRadius: '16px', 
        padding: '40px', 
        display: 'flex', 
        gap: '40px', 
        alignItems: 'center', 
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        flexWrap: 'wrap'
      }}>
        {/* معاينة الأيقونة بحجم كبير */}
        <div style={{ 
          width: '180px', 
          height: '180px', 
          background: '#f8f9fa', 
          borderRadius: '12px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          border: '1px solid #eaeaea' 
        }}>
          <img 
            src={icon.file_path} 
            alt={icon.filename} 
            style={{ maxWidth: '120px', maxHeight: '120px', objectFit: 'contain' }} 
          />
        </div>

        {/* معلومات الأيقونة وأزرار التحكم */}
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111', marginBottom: '10px' }}>
            {icon.filename}
          </h1>
          <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.5', marginBottom: '25px' }}>
            High-resolution vector asset ready for web and mobile development workflows.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a 
              href={icon.file_path} 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                background: '#000', 
                color: '#fff', 
                padding: '10px 18px', 
                borderRadius: '8px', 
                textDecoration: 'none', 
                fontSize: '13px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontWeight: '500' 
              }}
            >
              <Download size={16} />
              <span>Download Asset</span>
            </a>

            <button 
              onClick={handleCopyLink} 
              style={{ 
                background: '#f1f3f5', 
                color: '#333', 
                border: 'none', 
                padding: '10px 18px', 
                borderRadius: '8px', 
                cursor: 'pointer', 
                fontSize: '13px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                fontWeight: '500' 
              }}
            >
              {copied ? <Check size={16} color="green" /> : <Copy size={16} />}
              <span>{copied ? 'Copied Link!' : 'Copy URL'}</span>
            </button>

            <a 
              href={icon.file_path} 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                background: '#f1f3f5', 
                color: '#333', 
                padding: '10px', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                textDecoration: 'none' 
              }}
              title="Open Original"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconDetails;