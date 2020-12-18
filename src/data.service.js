const getdata = function() {
    return {
        definitions: [{
            name: "humanities",
            definition: "Latin Term, humanitas,which refers to humans and their culture - to learn what it is to be human "
        },
            {
                name: "consilience",
                definition: "the art and science of exploring the overlaps of what are often considered different subjects"
            },
            {        name: "why study humanities",
                     definition: "Exploring the continuing questions addressed by men and women throughout the ages through the vehicle of the arts should deepen and enrich our current existence"
            },
            {
                name: "Chronology",
                definition: "the method of taking events and putting them in the order of occurance"
            },
            {
                name: "Ancient Period",
                definition: "Massive Swath of time up to the Classical Period"
            },
            {
              name: "Classical Period",
              definition: "Rome, Greece, Alexander the great, Caesar From 8th Century BC to the fall of Rome",
              themes: " balance, truth/reason, democracy/republic, polytheism, humanism"

            },
            {
                name: "Middle Ages",
                definition: "476 (Fall of Rome) to 15th Century",
                themes: "religion, deference to God, crusades, pacifism, humility, feudalism, chivalry"

            },
            {
                name: "Renaissance",
                definition: "Means Rebirth, 15th Century to the end of the 17th (1699ish)",
                importantPeople: "Shakespeare",
                themes: "rebirth of classicism, humanism, rationalism, scientific expansion, university system, individualism, self-fashioning"
            },
            {
                name: "Enlightenment Period/ NeoClassical",
                definition: "18th century - age of reason ",
                importantPeople: "Benjamin Franklin, Jonathan Swift",
                themes: "skepticism, rationalism, empiricism, order, deism, classicism"
            },
            {
                name: "Romantic Era",
                definition: "reaction to the Enlightenment - Counter Enlightenment",
                importantPeople: "Keats, Wordsworth, Sir Walter Scott",
                themes: "nationalism, exoticism, revolution, heroism, passion, individualism, nature"
            },
            {
                name: "Victorian Era",
                definition: "last 2 thirds of 19th Century",
                importantPeople: "Queen Victoria",
                importantEvents: "Rise of the Novel. More Women Authors.",
                themes: ""
            },
            {
                name: "Realism Era",
                definition: "end of the 19th Century and early 20th Century",
                importantEvents: "Looking at gritty reality",
                themes: "Darwinism, industrialization, individualism, age of doubt"
            },
            {
                name: "Modern Era",
                definition: "First half of 20th century",
                importantPeople: "F Scott Fitzgerald"
            },
            {
                name: "PostModern Era",
                definition: "Last half of 20th Century",
                importantEvents: "Cold War"
            }

        ],
        facts: [
            {name: "Canterbury Tales",
            description: "First Book published on a printing press in english"},
            {
                name: "eros",
                description: "erotic love",
            },
            {
                name: "agape",
                description: "platonic love",
            },
            {
                name: "Courtly Love",
                description: "Medieval literature - pursuit of a married woman by an unmarried man, generally the wife of someone in power",
                notableExamples: "Elenor of Aquitaine, Lancelot, "
            },
            {
                name: "archetype",
                description: "shared across multiple cultures, a mythic character, plot patterns, symbol or buried assumption "
            },
            {
                name: "monomyth",
                description: "a myth that appears in all cultures"
            },
            {
                name: "Hero Types",
                description: "Epic Hero, Romantic Hero, Modern Day Hero"
            },
            {
                name: "Epic Hero",
                description: "Heroic Figure that is larger than life",
                notableExamples: "Achilles, Gilgamesh, Beowulf, Superman"
            },
            {
                name: "Romantic Hero",
                description: "The best among us, but could be us",
                notableExamples: "Batman, a Knight, Idealistic"
            },
            {
                name: "Modern Day hero",
                description: "Anyone could be this hero type in the right circumstances",

            },

        ],
        centralConcepts: [
            {
                name: "Humanism",
                description: "The study of the creative and intellectual contributions of all human cultures",
                secondaryDescription: "Ethical system that centers on humans and emphasizees reason"

            },
            {
                name: "Myth",
                description: "traditional stories of a people or culture"
            },
            {
                name: "Beauty",
                description: "Those qualities which give pleasure to the senses"
            },
            {
                name: "Aesthetic Experience",
                description: "an experience of beauty that inspires a feeling of pleasure"
            }

        ]
    };
}

export const dataService ={
    getdata
}