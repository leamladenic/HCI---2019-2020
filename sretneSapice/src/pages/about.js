import React from "react"
import { graphql, withAssetPrefix } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query {
    file(relativePath: { eq: "big_hero_about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutPage = ({ data }) => (
  <Layout>
    <Image
      fluid={data.file.childImageSharp.fluid}
      style={{ postition: "block", zIndex: "-10" }}
    />

    <div
      style={{
        marginLeft: "130px",
        marginRight: "130px",
      }}
    >
      <h1
        style={{
          marginTop: "30px",
          marginBottom: "30px",
          fontFamily: "'Roboto', sans-serif",
          fontStyle: "normal",
          fontSize: "70px",
          color: "#e77f8a",
        }}
      >
        O nama
      </h1>
      <p>
        “Sretne šapice” hrvatska udruga zaštitnika životinja je neprofitna,
        nevladina i nestranačka udruga službeno registrirana 14.07.1993.g. i
        upisana u Registar udruga Republike Hrvatske pod brojem 00001275.
        Osnovna djelatnost Udruge je pomoć napuštenim životinjama, te pomoć i
        potpora ljudima koji brinu o većem broju životinja.
      </p>
      <p>
        Već 10 godinaranije, dakle 1983. godine, zahvaljujući grupi entuzijasta
        i iskrenih ljubitelja i prijatelja životinja na čelu sa gospođom Helenom
        Fink utemeljen je prvi azil za pse u gradu Zagrebu i Hrvatskoj. Na
        prostor Bukovačke 220, na obiteljskom posjedu obitelji Lisičar otvorila
        su se vrata mnogim napuštenim, izgladnjelim, ranjenim, odlutalim,
        odbačenim, zlostavljanim, skotnim i neželjenim životinjama. Uz svu svoju
        ljubav i trud, te nesebično ulaganje vlastitih sredstava za nabavku
        hrane, lijekova i ostalih svakodnevnih potrepština, teško je uspijevalo
        podmiriti i najnužnije potrebe tih jadnih stvorenja.
      </p>
      <p>
        Punih 14 godina postojanja azila na Bukovačkoj, obraćali smo se Gradu za
        financijsku pomoć, ali jednostavno Grad nije imao razumijevanja za
        štićenike Sretnih šapica. Sve te godine azil je funkcionirao
        zahvaljujući dobrovoljnom radu malog broja ljubitelja životinja i
        skromnim sredstvima prikupljenim od malog broja građana i donatora iz
        zemlje i inozemstva. Na izmaku snaga, potpuno iscrpljeni i u velikim
        financijskim teškoćama započeli smo medijsku kampanju pod
        pokroviteljstvom “Vjesnika” za sakupljanje humanitarne pomoći za
        životinje iz Sretnih Šapica. Odaziv je bio veliki i građani grada
        Zagreba kao i drugih gradova pokazali su da zaista imaju veliko srce.
        Dobili smo pomoć u hrani, dekama, vojničkim krevetima, starim
        namještajem, lijekovima i starim papirom. Oglasilo se i Gradsko
        poglavarstvo i pozvalo nas da potpišemo Ugovor o primanju mjesečne
        dotacije. Konačno, 1997. godine, nakon 14 godina rada azila, Sretne
        šapice dobiva ravnopravni status s druga dva Društva za zaštitu
        životinja. Na tisuće i tisuće pasa prošlo je kroz azil u Bukovačkoj.
        Veliki broj našao je dobre udomitelje, ali na žalost bilo je i onih koji
        nisu imali sreću naći čovjeka koji će ih voljeti. Njih stotinjak
        dočekalo je u azilu siječanj 2001. godine.
      </p>
      <p>
        U siječnju 2001. godine, pritisnuti nalogom za iseljenje, Sretne Šapice
        je zatvorila svoja vrata na Bukovačkoj 220. Ugasio se jedini svjetionik
        koji je posljednjih 18 godina osvjetljavao mračni put stradanja mnogim
        napuštenim životinjama. Potopila se jedina splav na kojoj je spas od
        sigurne smrti pronašlo na tisuće i tisuće neželjenih životinja. Teška
        srca iznevjerili smo one koji su u Sretnim Šapicama dugi niz godina
        imali sigurno utočište i topli dom pun ljubavi. Pse smo morali predati u
        novoizgrađeni gradski azil u Dumovcu. U početku je naš odlazak u gradski
        azil bio gotovo svakodnevan, posebice kako bi našim prisustvom
        štićenicima Sretnih Šapica olakšali boravak u Dumovcu, koji je za njih
        zasigurno značio još jednu traumu na već dugačkom popisu proživjelih
        trauma. Od ravnja 2001. godine suradnja sa azilom u Dumovcu,
        zahvaljujući dr. Adaniću, potpuno je prekinuta i to zbog neslaganja oko
        udomljavanja pasa, neadekvatnog držanja štenaca i krivog spajanja pasa u
        velike kaveze 4 x 6 m (po 20 zajedno).
      </p>
      <p>
        Sve to rezultiralo je teškim ranjavanjem, dubokim ugriznim ranama i
        konačno velikom smrtnošću pasa u azilu. Konkretno u 8 mjeseci rada
        gradskog azila bilo je 100 mrtvih. Sve gore rezultiralo je time da su
        Sretne Šapice pokušala brzom akcijom udomljavanja spasiti pseće živote
        iz azila. One starije i invalidne smjestili smo kod naših članova u
        njihove stanove i dvorišta, tako da danas na skrbi imamo oko 150 pasa i
        350 mačaka. Konkretno na 20 lokacija naši članovi svakodnevno bez ikakve
        naknade brinu o povjerenim im životinjama uz osiguranu hranu, liječenje,
        cijepljenje, kastracije i sterilizacije. Povremeno uspijemo udomiti neke
        od naših štićenika, ali njihovo mjesto odmah zauzimaju nove životinje,
        tako da su nam kapaciteti uvijek popunjeni. 2004.g. nakon smjene dr.
        Adanića u Dumovcu, uspostavljena je pozitivna komunikacija sa dr.
        Tatjanom i uvjeti u tom skloništu za napuštene životinje su se znatno
        promijenili na bolje. Više nikada se nije ponovila krvava 2001.godina.
        Za primarni cilj smo postavili spašavanje ranjenih životinja i skotnih
        ženki jer to ne radi niti jedna druga udruga, niti je gradski azil
        opremljen za zbrinjavanje ranjenih. U tome nam uvelike pomaže
        Veterinarski fakultet čiji djelatnici u klinikama svakodnevno spašavaju
        veliki broj životinja pronađenih pregaženih na cesti, zlostavljanih i
        propucanih od strane lovaca. Ranjena životinja je do svog ozdravljenja
        pod svakodnevnom brigom volontera i veterinara. Nakon ozdravljenja ulazi
        u program udomljavanja. Nadamo se da što prije pronađemo novi posjed
        gdje bi opet mogli otvoriti svoj azil pa da Sretne Šapice ponovno
        zaplove punim jedrima.
      </p>
    </div>
  </Layout>
)

export default AboutPage
