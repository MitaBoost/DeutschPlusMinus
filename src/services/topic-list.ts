/**
 * Represents a discussion topic.
 */
export interface DiscussionTopic {
  /**
   * The title of the discussion topic in German.
   */
  title: string;
}

/**
 * Asynchronously retrieves a list of discussion topics.
 *
 * @returns A promise that resolves to an array of DiscussionTopic objects.
 */
export async function getTopicList(): Promise<DiscussionTopic[]> {
  // TODO: Implement this by fetching from an API or database.
  return [
    {
      title: 'Stadtzentrum ohne Autos + öffentliche Verkehrsmittel',
    },
    {
      title: 'Computer für jeden Kursraum + Computer für Kinder + Handy für Kinder + Handy in der Firma + Computer und Berufschancen + Computerkenntnisse',
    },
    {
      title: 'Leben mit Geschwistern + Sollten Jugendliche mit 18 alleine leben? + Hotel Mama',
    },
    {
      title: 'Mehrere Sprachen lernen + Fremdsprachen',
    },
    {
      title: 'Extremsport + Sport als Beruf + Sportschule + Fahrrad',
    },
    {
      title: 'Urlaub im Heimatland oder Ausland + Urlaub bei Verwandten + Im Urlaub verreisen + Urlaub mit Familie + Urlaub am Strand',
    },
    {
      title: 'Musikinstrument + Musikschule + Musik im Alltag',
    },
    {
      title: 'Bio-Essen + Vegetarisches Essen + Gekochtes Essen oder Fastfood + Fertiggerichte',
    },
    {
      title: 'Glauben an Informationen im Internet',
    },
    {
      title: 'Einkaufen im Internet oder im Einkaufszentrum',
    },
    {
      title: 'Große Liebe im Internet',
    },
    {
      title: 'Soziale Netzwerke',
    },
    {
      title: 'Wege nach der Schule + Studieren im Heimatland oder Ausland',
    },
    {
      title: 'Mittagsschlaf + Mittagspause',
    },
    {
      title: 'Rauchen + Rauchverbot an öffentlichen Orten/Restaurants',
    },
    {
      title: 'Leben auf dem Land oder in der Stadt',
    },
    {
      title: 'Auswirkungen der Schulnoten',
    },
    {
      title: 'Haushalt',
    },
    {
      title: 'Haustiere',
    },
    {
      title: 'Gedruckte oder E-Books',
    },
    {
      title: 'Eltern entscheiden über Kleidung',
    },
    {
      title: 'Berufstätige Eltern: Sind Großeltern die Lösung? + Betreuung von Kindern ohne Kindergarten + Kindergarten',
    },
    {
      title: 'Neue oder gebrauchte Ware (Second-Hand Kleidung)',
    },
    {
      title: 'Parks in der Stadt',
    },
    {
      title: 'Kinder oder Karriere + Macht Arbeit uns krank?',
    },
    {
      title: 'Reisebüro oder online buchen',
    },
    {
      title: 'Jungen und Mädchen in der Schule trennen',
    },
    {
      title: '24-Stunden-geöffnete Geschäfte',
    },
    {
      title: 'Feste feiern',
    },
    {
      title: 'Haben Kinder wenig Freizeit?',
    },
    {
      title: 'Gewalt in der Familie',
    },
  ];
}
