# Blog da Cruz de Prata — Padrão de Postagens

## Estrutura

- Listagem: `blog/index.html`
- Posts individuais: `blog/nome-do-post.html`

## Regras para cada postagem

1. **Imagem destacada**: usar imagens de `../imsgenspost/` com `alt` e `title`
2. **CTA obrigatório no final** do `<article class="post-content">`:

```html
<section class="cta-whatsapp">

    <h2>Agende sua Consulta Agora</h2>

    <p>
        Precisa realizar exames laboratoriais, consulta médica, exames ocupacionais ou exame toxicológico?
        Nossa equipe está pronta para atender você com rapidez, segurança e atendimento humanizado.
    </p>

    <a href="https://wa.me/551732620705?text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta%20na%20Cruz%20de%20Prata."
       target="_blank"
       rel="noopener noreferrer">

        <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width="28"
            height="28"
            loading="lazy" />

        Agendar Consulta pelo WhatsApp

    </a>

</section>
```

3. **Imagens**: colocar em `../imsgenspost/` com nome descritivo (ex: `post-titulo.jpg`)
4. **Imagem destacada no post**:

```html
<img src="../imsgenspost/nome-da-imagem.jpg"
     alt="Descrição da imagem"
     title="Título da imagem"
     class="post-featured-image"
     loading="lazy" />
<p class="post-featured-caption">Legenda da imagem</p>
```

5. **Card na listagem** (`blog/index.html`):

```html
<article class="blog-card">
  <img src="../imsgenspost/nome-da-imagem.jpg"
       alt="..."
       class="blog-card-image"
       loading="lazy" />
  <div class="blog-card-body">
    <h2><a href="slug-do-post">Título do Post</a></h2>
    <p>Resumo breve...</p>
    <a href="slug-do-post" class="btn-leia">
      Leia mais <i class="fas fa-arrow-right"></i>
    </a>
  </div>
</article>
```

6. **Links internos** devem usar os anchors da página principal: `../#exames`, `../#clinico-geral`, `../#medicina-trabalho`, `../#admissional`, `../#agendar`
7. **Atualizar** `sitemap.xml` com a URL do novo post
8. **JSON-LD** no final do post (FAQ + MedicalClinic)
