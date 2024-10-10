import React from "react";
import Header from "./components/Header";
import SingleMainImage from "./components/SingleMainImage";
import SingleGridImages from "./components/SingleGridImages";
import SingleMoreProjects from "./components/SingleMoreProjects";
import Footer from "./components/Footer";

const SingleGolisk = () => {
  return (
    <div className="flex justify-center flex-col">
      <Header />
      <SingleMainImage image={"/img/golisk.jpg"} 
        p1={"A Golisk, uma marca de cerveja artesanal em crescimento, era inicialmente vista como mais uma entre tantas no mercado competitivo. No entanto, quando nos procuraram e firmaram parceria com a VIKARO, essa realidade mudou completamente. A Golisk não só ganhou uma nova identidade visual, mas também passou a ser amplamente reconhecida nas redes sociais e no ambiente digital. O que antes era apenas uma opção entre várias, agora se tornou um símbolo de qualidade, inovação e forte presença online, fruto direto da nossa colaboração estratégica."} 
        p2={"Você pode se perguntar: como a VIKARO conseguiu transformar a Golisk de maneira tão impactante? A resposta está em nossa combinação de experiência, especialização e um método exclusivo que desenvolvemos ao longo dos anos. Essa fórmula, que provou ser um sucesso para a Golisk, pode ser replicada em qualquer projeto para gerar resultados igualmente impressionantes e duradouros."}
        p3={"Nosso trabalho começou com a criação de um site moderno e funcional, que não apenas capturasse a essência da marca, mas também oferecesse uma experiência de navegação fluida e intuitiva. Além disso, implementamos uma estratégia robusta de SEO, com a criação de conteúdo relevante, uso de palavras-chave eficazes, títulos atrativos e páginas de carregamento rápido. Através de práticas avançadas, como os Topic Clusters, elevamos a visibilidade da Golisk, tornando-a uma referência digital no segmento de cervejas artesanais. O resultado? Um aumento expressivo na procura por seus produtos e uma marca que hoje é admirada e reconhecida."}
        />
        <SingleGridImages image1={"/img/golisk1.jpg"} image2={"/img/golisk2.jpg"} image3={"/img/golisk3.jpg"} image4={"/img/golisk4.jpg"} 
        p={"Trabalhar com a GOLISK foi uma experiência excepcional, marcada pela qualidade da equipe e pela satisfação de contribuir para o renascimento da marca, elevando-a ao patamar que sempre mereceu. Através dessa parceria, a GOLISK se transformou em uma marca admirada e respeitada, com uma identidade renovada e uma forte presença digital. O profissionalismo da equipe, aliado à competência, compromisso e honra, tornou essa colaboração ainda mais enriquecedora e gratificante. O mais satisfatório foi acompanhar de perto o crescimento e a reinvenção da GOLISK, transformando uma visão em realidade com resultados concretos e impacto positivo no mercado, reforçando nossa motivação de seguir buscando a excelência."}
        ></SingleGridImages>
        <SingleMoreProjects></SingleMoreProjects>
        <Footer></Footer>
    </div>
  );
};

export default SingleGolisk;
