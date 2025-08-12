# Fitness Platform - Landing Page

Uma landing page profissional e moderna para plataforma SaaS de gestão para academias, personal trainers, estúdios de yoga e centros esportivos.

## 🚀 Características

- **Design Responsivo**: Mobile-first com TailwindCSS
- **Componentes Modulares**: Estrutura organizada e reutilizável
- **Formulário de Contato**: Validação com React Hook Form
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Animações Suaves**: Transições e hover effects
- **Acessibilidade**: Navegação por teclado e screen readers

## 🛠️ Tecnologias Utilizadas

- **React 18+** - Biblioteca principal
- **TailwindCSS** - Framework CSS utilitário
- **React Hook Form** - Validação de formulários
- **Lucide React** - Ícones modernos
- **Framer Motion** - Animações (opcional)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.js       # Cabeçalho com navegação
│   ├── Hero.js         # Seção principal
│   ├── About.js        # Sobre a empresa
│   ├── Features.js     # Funcionalidades
│   ├── Testimonials.js # Depoimentos
│   ├── Pricing.js      # Planos e preços
│   ├── Contact.js      # Formulário de contato
│   └── Footer.js       # Rodapé
├── App.js              # Componente principal
├── index.js            # Ponto de entrada
└── index.css           # Estilos globais e TailwindCSS
```

## 🚀 Instalação

### Pré-requisitos

- Node.js 16+ 
- npm ou yarn

### Passos

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd fitness-platform-landing
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   npm start
   ```

4. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 📱 Seções da Landing Page

### 1. Header
- Logo da empresa
- Menu de navegação responsivo
- Botão CTA "Começar Agora"

### 2. Hero Section
- Título impactante
- Subtítulo explicativo
- Botões de ação
- Ilustração interativa

### 3. Sobre
- Missão da empresa
- Benefícios principais
- Estatísticas e números

### 4. Funcionalidades
- 8 funcionalidades principais
- Ícones coloridos
- Descrições detalhadas

### 5. Depoimentos
- 4 depoimentos de clientes
- Sistema de avaliação
- Estatísticas de resultados

### 6. Preços
- 3 planos (Básico, Profissional, Enterprise)
- Toggle mensal/anual
- Comparação de recursos

### 7. Contato
- Formulário de captação de leads
- Validação em tempo real
- Informações de contato

### 8. Footer
- Links úteis organizados
- Newsletter
- Redes sociais
- Informações legais

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... outras variações
  }
}
```

### Conteúdo
- Textos: Edite diretamente nos componentes
- Imagens: Substitua as referências nos componentes
- Links: Atualize os hrefs nos botões e navegação

### Funcionalidades
- Formulário: Integre com seu serviço de captura de leads
- Analytics: Adicione Google Analytics ou similar
- Chat: Integre com WhatsApp Business ou chat ao vivo

## 📦 Build para Produção

```bash
npm run build
```

O build será gerado na pasta `build/` e estará pronto para deploy.

## 🌐 Deploy

### Netlify
1. Conecte seu repositório
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Importe o projeto
2. Framework preset: Create React App
3. Deploy automático

### Outros
- Upload da pasta `build/` para seu servidor
- Configuração de domínio personalizado
- SSL/HTTPS obrigatório para produção

## 🔧 Configurações Adicionais

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz:

```env
REACT_APP_CONTACT_EMAIL=contato@suaempresa.com
REACT_APP_PHONE_NUMBER=(11) 99999-9999
REACT_APP_COMPANY_NAME=Sua Empresa
```

### Integração com Backend
Para integrar o formulário de contato:

1. Configure a URL da API no componente `Contact.js`
2. Implemente a validação no backend
3. Configure CORS se necessário
4. Adicione rate limiting para segurança

## 📊 Analytics e Conversão

### Google Analytics
```javascript
// Adicione no index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Meta Pixel (Facebook)
```javascript
// Adicione no index.html
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'SEU_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🚀 Próximos Passos

- [ ] Integração com CRM
- [ ] Chat ao vivo
- [ ] Blog integrado
- [ ] Sistema de agendamento
- [ ] Área do cliente
- [ ] Dashboard de analytics

## 📞 Suporte

Para dúvidas ou suporte:
- Email: contato@fitnessplatform.com
- Telefone: (11) 99999-9999

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para transformar negócios esportivos**
