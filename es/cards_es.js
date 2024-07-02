const cartas = [
  {
    one: [
      {
        category: 'MITO',
        content: 'El aborto no es legal en California.',
        src: './assets/cards/card-one-myth.png',
      },
      {
        category: 'HECHO',
        header: 'El aborto sí es legal en California.',
        content:
          'Tanto el aborto de procedimiento como el aborto con medicamentos, que es un aborto con pastillas, es legal en el estado de California. Obtener pastillas abortivas a través de un servicio de telesalud también es legal en California. Puede recibir atención de aborto en California incluso si no eres residente del estado <a href="abortion.ca.gov/es">(abortion.ca.gov/es)</a>.',
        src: './assets/cards/card-one-fact.png',
      },
      {
        category: 'TESTIMONIO',
        content:
          'Visite <a href="https://abortion.ca.gov/es">https://abortion.ca.gov/es</a>  para obtener información sobre el aborto en un sitio seguro. Este sitio no guarda ni rastrea su información.',
        src: './assets/cards/card-one-fact.png',
      },
    ],
  },
  {
    two: [
      {
        category: 'MITO',
        content:
          'Conseguir pastillas abortivas por línea no es legítimo ni seguro.',
        src: './assets/cards/card-two-myth.png',
      },
      {
        category: 'HECHO',
        header:
          'La idea de pedir pastillas abortivas por línea definitivamente puede sonar aterradora, afortunadamente ha habido investigaciones que muestran que obtener pastillas abortivas a través de una clínica virtual de confianza es seguro y legítimo',
        content:
          'Nuestros amigos de la Universidad de California, San Francisco (UCSF) llevaron a cabo el <a href="chatstudy.org">estudio de CHAT</a>, que evaluó las experiencias de pacientes que obtuvieron servicios de aborto de 3 clínicas virtuales de confianza Abortion on Demand, Choix y Hey Jane. Estas clínicas virtuales utilizan la telesalud para que los pacientes que buscan atención de aborto tengan la opción de hablar con un profesional de la salud con licencia por llamada telefónica, videollamada o por mensajes de texto a través de su plataforma virtual.',
        src: './assets/cards/card-two-fact.png',
      },
      {
        category: 'TESTIMONIO',
        content:
          '“Al principio no podía creer que existiera un servicio como este en línea, pero decidí darle una oportunidad. Me impresionó mucho todo el proceso, poder hablar con alguien y el empaquetado del medicamento, toda la presentación me hizo sentir mejor y a gusto, ya que parecía profesional y legítima. Anteriormente había intentado ordenar por línea de un lugar extranjero, pero al final no tomé el medicamento porque no podía confiar en él.” - <b>Paciente de clínica virtual. <a href="https://chatstudy.org">chatstudy.org</a></b>',
        src: './assets/cards/card-two-fact.png',
      },
    ],
  },
  {
    three: [
      {
        category: 'MITO',
        content:
          'Sólo puede recibir atención de salud reproductiva en persona en una clínica.',
        src: './assets/cards/card-three-myth.png',
      },
      {
        category: 'HECHO',
        header: `La telemedicina y la telesalud son formas adicionales de obtener atención de salud reproductiva de un profesional de la salud con licencia a través de una plataforma virtual.`,
        content: `Tener una visita de telemedicina o telesalud es como tener una cita médica regular, pero no necesita ir en persona. La telemedicina le permite hablar con un profesional de la salud con licencia por llamada telefónica o videollamada y con la telesalud tiene la opción adicional de enviar mensajes seguros con un proveedor a través de una aplicación en su dispositivo.`,
        src: './assets/cards/card-three-fact.png',
      },
      {
        category: 'TESTIMONIO',
        content: `“Estoy muy agradecida por la accesibilidad a un proveedor. Posiblemente el recurso de mayor apoyo emocional que he tenido, independientemente de no estar en persona. Me hizo sentir que podía expresar mis preocupaciones a un profesional si lo necesitaba, independientemente de tener una cita / franja horaria. La accesibilidad puede hacer que un proceso que ya es difícil para algunos sea mucho más fácil.” - <b>Paciente de clínica virtual. <a href="https://chatstudy.org">chatstudy.org</a></b>`,
        src: './assets/cards/card-three-fact.png',
      },
    ],
  },
  {
    four: [
      {
        category: 'MITO',
        content: `No puede confiar que las pastillas abortivas funcionen si las toma sola en casa.`,
        src: './assets/cards/card-four-myth.png',
      },
      {
        category: 'HECHO',
        header: `Su derecho a la autonomía corporal incluye el derecho a decidir qué tipo de servicios de aborto desea y necesita.`,
        content: `Si el aborto con medicamentos es la mejor opción para usted, investigaciones confiables nos han asegurado que el aborto con medicamentos es seguro y efectivo, ya sea que obtenga las pastillas en persona en una clínica de salud reproductiva o en línea a través de una clínica virtual de confianza.

        Ambas opciones ofrecen apoyo fuera del horario de atención mientras manejas tu aborto en casa, pero si necesita otro recurso, también puede comunicarse con
        la línea directa llamada The Miscarriage + Abortion Hotline que proporciona consejos médicos por mensaje de texto o por teléfono de médicos voluntarios. El número es (833) 246-2632. 

        Está disponible en inglés y español de 8AM a 11PM en todas las zonas horarias continentales de los Estados Unidos, y responden dentro de una hora.
`,
        src: './assets/cards/card-four-fact.png',
      },
      {
        category: 'TESTIMONIO',
        content: `“Agradezco esta experiencia de tener la autonomía para poder administrar mi propia atención con el apoyo adecuado de una enfermera practicante. Me sentí empoderada, pero no me sentía sola y me sentía segura, lo cual era lo más importante para mí.” - <b>Paciente de clínica virtual. <a href="https://chatstudy.org">chatstudy.org</a></b>`,
        src: './assets/cards/card-four-fact.png',
      },
    ],
  },
  {
    five: [
      {
        category: 'MITO',
        content: 'La telemedicina y la telesalud pueden ayudar a todos.',
        src: './assets/cards/card-five-myth.png',
      },
      {
        category: 'HECHO',
        header:
          'Aunque la telemedicina y la telesalud han sido una parte importante de ampliar el acceso a la atención para muchas personas, puede que no sea la opción preferida para todos.',
        content: `Todavía hay muchos obstáculos que las personas enfrentan simplemente accediendo a información médica precisa, pagando por la atención médica, encontrando proveedores que hablan su idioma e incluso confiar en el sistema médico.
  
          Ya sea en persona en una clínica o a través de telesalud, asegurando que nuestras comunidades tengan acceso a información médica precisa y el acceso a la atención del aborto con el que se sienten más cómodos, libres de vergüenza, estigma y sin barreras, es esencial para la lucha por la Justicia Reproductiva!
          `,
        src: './assets/cards/card-five-fact.png',
      },
      {
        category: 'TESTIMONIO',
        content: `“No sentí ningún juicio sobre mi elección que era mejor para mi familia y mi carrera en este momento de mi vida. ¡Fue conveniente! Solo me gustaria que [la clínica virtual] aceptara medi-cal.” - <b>Paciente de clínica virtual. <a href="https://chatstudy.org">chatstudy.org</a></b>`,
        src: './assets/cards/card-five-fact.png',
      },
    ],
  },
]

export default cartas
