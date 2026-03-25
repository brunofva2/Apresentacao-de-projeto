import React, { useState } from 'react'
import {
  WhatsappLogo,
  CurrencyDollar,
  Warning,
  HouseLine,
  CheckCircle,
  MagnifyingGlass,
  Files,
  FileText,
  CaretDown,
} from 'phosphor-react'

export const BrunoRegulariza = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const colors = {
    primary: '#1a3a34',
    accent: '#d4a373',
    danger: '#b91c1c',
    bg: '#ffffff',
  }

  const servicos = [
    'Averbação de Escrituras',
    'Incorporação de Condomínio',
    'Desmembramento/Loteamento',
    'Regularização de Construção',
    'CND - Receita Federal',
    'Alvarás de Bombeiros',
    'Alteração de Divisas',
    'Retificação de Área',
    'Unificação de Matrículas',
    'Projetos Elétrico/Hidro',
    'Terraplanagem',
    'Habite-se',
    'Certidão de APP',
    'INCRA / CAR',
  ]

  return (
    <div
      style={{
        width: '100%',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap');
        
        html, body { margin: 0; padding: 0; width: 100%; overflow-x: hidden; }
        * { box-sizing: border-box; }

        .section-full { width: 100%; padding: 100px 0; display: flex; justify-content: center; }
        .container { width: 100%; max-width: 1200px; padding: 0 5%; }

        .hero { 
          width: 100%;
          min-height: 85vh;
          background: linear-gradient(rgba(26,58,52,0.92), rgba(26,58,52,0.92)), url('https://images.unsplash.com/photo-1582408921715-18e7806365c1?auto=format&fit=crop&w=1600'); 
          background-size: cover; 
          background-position: center;
          color: white; 
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .btn-green { 
          background: #15803d; 
          color: white; 
          padding: 22px 45px; 
          border-radius: 12px; 
          text-decoration: none; 
          font-weight: 800; 
          display: inline-flex; 
          align-items: center; 
          gap: 15px; 
          font-size: 1.2rem;
          transition: 0.3s; 
          border: none; 
          cursor: pointer;
        }
        .btn-green:hover { background: #166534; transform: translateY(-3px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }

        .grid-cards { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); 
          gap: 30px; 
          width: 100%;
        }

        .card { background: white; padding: 50px 30px; border-radius: 20px; border: 1px solid #eee; text-align: center; }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .section-full { padding: 60px 0; }
          .btn-green { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">
          <p
            style={{
              color: colors.accent,
              fontWeight: 700,
              letterSpacing: '4px',
              marginBottom: '20px',
              textTransform: 'uppercase',
            }}
          >
            Gabriel Costa - Engenheiro Civil Especialista em Regularização
            Imobiliária
          </p>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 800,
              marginBottom: '25px',
              lineHeight: 1.1,
            }}
          >
            Seu Imóvel Não Tem Habite-se e a Venda Travou?
          </h1>
          <p
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
              marginBottom: '45px',
              opacity: 0.9,
              maxWidth: '900px',
              margin: '0 auto 45px',
            }}
          >
            Regularizamos toda a documentação para você não perder o comprador.
            Atendimento em Duque de Caxias e RJ.
          </p>
          <button className="btn-green">
            <WhatsappLogo size={32} weight="fill" /> QUERO DESTRAVAR MINHA VENDA
            AGORA
          </button>
        </div>
      </section>

      {/* DORES SECTION */}
      <section className="section-full" style={{ background: '#f9fafb' }}>
        <div className="container">
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '60px',
              fontSize: '2.5rem',
              fontWeight: 800,
            }}
          >
            Isso aconteceu com você?
          </h2>
          <div className="grid-cards">
            <div className="card">
              <CurrencyDollar size={56} color={colors.danger} />
              <h3 style={{ margin: '20px 0', fontSize: '1.5rem' }}>
                Desvalorização Real
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                Imóveis irregulares perdem valor de mercado. Não deixe seu
                patrimônio desvalorizar.
              </p>
            </div>
            <div className="card">
              <Warning size={56} color={colors.danger} />
              <h3 style={{ margin: '20px 0', fontSize: '1.5rem' }}>
                Financiamento Negado
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                Bancos não aprovam crédito para imóveis sem a documentação em
                dia.
              </p>
            </div>
            <div className="card">
              <HouseLine size={56} color={colors.danger} />
              <h3 style={{ margin: '20px 0', fontSize: '1.5rem' }}>
                Venda Impedida
              </h3>
              <p style={{ opacity: 0.7, lineHeight: 1.6 }}>
                O cartório não realiza a transferência de propriedade sem o
                Habite-se.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS SECTION */}
      <section className="section-full">
        <div className="container">
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '50px',
              fontSize: '2.2rem',
            }}
          >
            Soluções Técnicas & Jurídicas
          </h2>
          <div className="services-grid">
            {servicos.map((s, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px',
                  background: '#f3f4f6',
                  borderRadius: '12px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  border: '1px solid #e5e7eb',
                }}
              >
                <CheckCircle size={22} color={colors.primary} weight="fill" />{' '}
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO SECTION */}
      <section
        className="section-full"
        style={{ background: colors.primary, color: 'white' }}
      >
        <div className="container">
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '70px',
              fontSize: '2.5rem',
            }}
          >
            Como Resolvemos
          </h2>
          <div
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              display: 'grid',
              gap: '50px',
            }}
          >
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <MagnifyingGlass size={45} color={colors.accent} />
              <div>
                <h4 style={{ fontSize: '1.5rem' }}>1. Diagnóstico</h4>
                <p style={{ opacity: 0.8 }}>
                  Análise detalhada da situação do seu imóvel.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <Files size={45} color={colors.accent} />
              <div>
                <h4 style={{ fontSize: '1.5rem' }}>2. Projetos</h4>
                <p style={{ opacity: 0.8 }}>
                  Desenvolvimento de laudos e plantas técnicas.
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <FileText size={45} color={colors.accent} />
              <div>
                <h4 style={{ fontSize: '1.5rem' }}>3. Aprovação</h4>
                <p style={{ opacity: 0.8 }}>
                  Habite-se em mãos e venda liberada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '100px 5%',
          textAlign: 'center',
          background: '#0f172a',
          color: 'white',
        }}
      >
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', marginBottom: '30px' }}>
            Destrave sua venda hoje.
          </h2>
          <button className="btn-green">
            <WhatsappLogo size={32} weight="fill" /> AGENDAR CONSULTA TÉCNICA
          </button>
          <div style={{ marginTop: '80px', opacity: 0.4, fontSize: '0.9rem' }}>
            © 2026 Bruno Engenharia - Especialista em Regularização Imobiliária
          </div>
        </div>
      </footer>
    </div>
  )
}
