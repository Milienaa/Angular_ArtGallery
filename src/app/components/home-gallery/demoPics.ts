const demoPics = [
    {
        id: 1,
        title: "Starry Night",
        author: "Vincent Willem van Gogh",
        description: "Iconic masterpiece by Van Gogh, depicts swirling stars...",
        img: "../assets/stars_night_vg.jpg",
        text: "Starry Night is an iconic masterpiece by Vincent van Gogh. Painted in 1889, it depicts the night sky over the French town of Saint-Rémy-de-Provence. The swirling stars, cypress trees, and quaint village create a sense of movement and serenity. Van Gogh painted this during his stay at the Saint-Paul-de-Mausole asylum, where he sought treatment for mental illness. The painting is renowned for its vivid colors and emotional intensity, capturing the artist's unique vision of the world."
    },
    {
        id: 2,
        title: "Field with Irises near Arles",
        author: "Vincent Willem van Gogh",
        description: "Vibrant field of irises near Arles...",
        img: "../assets/iris_vg.jpg",
        text: "Field with Irises near Arles is a vibrant painting by Vincent van Gogh, created in 1888. It showcases a colorful field of irises in bloom, with vivid hues of blue, purple, and green. Van Gogh painted this masterpiece during his time in Arles, where he found inspiration in the natural beauty of the countryside. The bold brushstrokes and expressive style capture the essence of the scene, conveying the artist's emotional connection to nature."
    },
    {
        id: 3,
        title: "The Potato Eaters",
        author: "Vincent Willem van Gogh",
        description: "Realistic portrayal of peasant life...",
        img: "../assets/potato_eaters_vg.jpg",
        text: "The Potato Eaters is a realistic portrayal of peasant life by Vincent van Gogh, painted in 1885. It depicts a group of impoverished peasants gathered around a table, sharing a humble meal of potatoes. Van Gogh aimed to capture the harsh reality of rural existence, emphasizing the dignity and humanity of his subjects. The dark, earthy tones and somber mood convey the hardship and simplicity of their lives, reflecting Van Gogh's deep empathy for the working class."
    },
    {
        id: 4,
        title: "Cafe Terrace at Night",
        author: "Vincent Willem van Gogh",
        description: "Charming scene of a cafe terrace...",
        img: "../assets/night_teracca_vg.jpg",
        text: "Cafe Terrace at Night is a charming painting by Vincent van Gogh, completed in 1888. It depicts a lively scene at a cafe terrace in Arles, with vibrant colors and swirling brushstrokes. Van Gogh was captivated by the warm glow of the gas lamps and the bustling atmosphere of the night. The composition and use of light create a sense of depth and movement, inviting the viewer to step into the scene and experience the lively ambiance of the cafe."
    },
    {
        id: 5,
        title: "Inaugural Gooseflesh",
        author: "Salvador Felip Jacint Dali",
        description: "Surreal depiction of dreamlike imagery...",
        img: "../assets/gooseflesh_sd.jpg",
        text: "Inaugural Gooseflesh is a surreal masterpiece by Salvador Dalí, known for its dreamlike imagery and bizarre symbolism. Painted in 1933, it features a landscape of distorted forms and fantastical creatures, including Dalí's famous melting clocks. The painting explores themes of subconscious desire and irrationality, challenging conventional notions of reality. With its bold colors and enigmatic composition, Inaugural Gooseflesh remains a captivating and mysterious work of art."
    
    },
    {
        id: 6,
        title: "The Persistence of Memory",
        author: "Salvador Felip Jacint Dali",
        description: "Surreal depiction of melting clocks...",
        img: "../assets/memory_sd.jpg",
        text: "The Persistence of Memory is a surreal masterpiece by Salvador Dalí, painted in 1931. It features melting clocks draped over various objects in a dreamlike landscape. Dalí's work often explores the concept of time and reality, and this painting is one of his most iconic creations. The soft, melting forms and eerie atmosphere evoke a sense of timelessness and uncertainty, challenging the viewer's perceptions of the world."
    
    },
    {
        id: 7,
        title: "Sleep",
        author: "Salvador Felip Jacint Dali",
        description: "Surreal depiction of sleeping figure...",
        img: "../assets/sleep_sd.jpg",
        text: "Sleep is a surreal painting by Salvador Dalí, completed in 1937. It depicts a sleeping figure floating above a barren landscape, surrounded by strange objects and creatures. Dalí's work often explores the subconscious mind and the mysteries of dreams, and Sleep is no exception. The eerie atmosphere and surreal imagery create a sense of unease and intrigue, inviting the viewer to interpret its meaning and symbolism."
    },
    {
        id: 8,
        title: "Metamorphosis Of Narcissus",
        author: "Salvador Felip Jacint Dali",
        description: "Symbolic representation of Greek myth...",
        img: "../assets/narcissus_sd.jpg",
        text: "Metamorphosis of Narcissus is a symbolic masterpiece by Salvador Dalí, painted in 1937. It depicts the mythological story of Narcissus, who fell in love with his own reflection and was transformed into a flower. Dalí's interpretation combines elements of the ancient myth with his own surreal imagery, creating a rich tapestry of symbolism and meaning. The painting explores themes of self-obsession, transformation, and the cyclical nature of existence, inviting the viewer to contemplate the nature of identity and desire."
    },
    {
        id: 9,
        title: "The Dream",
        author: "Pablo Ruiz y Picasso",
        description: "Surreal depiction of dreamlike imagery...",
        img: "../assets/dream_pp.jpg",
        text: "The Dream is a surreal painting by Pablo Picasso, completed in 1932. It features a reclining figure surrounded by fantastical forms and symbols, evoking the mysterious world of dreams. Picasso's work often blurs the boundaries between reality and imagination, and The Dream is a prime example of his innovative approach to art. The bold colors and abstract shapes create a sense of movement and depth, inviting the viewer to explore the hidden meanings within the painting."
    },
    {
        id: 10,
        title: "The Weeping Woman",
        author: "Pablo Ruiz y Picasso",
        description: "Cubist portrayal of grief and anguish...",
        img: "../assets/cried_woman_pp.jpg",
        text: "The Weeping Woman is a powerful portrayal of grief and anguish by Pablo Picasso, completed in 1937. It depicts a woman in tears, her face contorted in sorrow and pain. Picasso's cubist style allows him to capture the complexity of human emotion, with fragmented forms that reflect the shattered psyche of the subject. The painting is part of a series inspired by the Spanish Civil War, reflecting Picasso's deep empathy for the suffering of his people. Through bold colors and distorted figures, Picasso conveys the universal themes of loss and suffering."
    },
    {
    id: 11,
    title: "Self-Portrait",
    author: "Pablo Ruiz y Picasso",
    description: "Self-portrait by Picasso...",
    img: "../assets/avtoportret_pp.jpg",
    text: "Self-Portrait is an artwork created by Pablo Picasso, one of the most influential artists of the 20th century. Painted in 1907 during his early cubist period, this self-portrait exemplifies Picasso's revolutionary approach to art. In this painting, Picasso presents himself in a distorted and fragmented manner, reflecting his exploration of form and perspective. The colors are muted, and the lines are sharp, capturing the intensity of Picasso's gaze. Self-Portrait is a testament to Picasso's innovative spirit and enduring legacy in the art world."
  },
  {
    id: 12,
    title: "The Old Guitarist",
    author: "Pablo Ruiz y Picasso",
    description: "The Old Guitarist by Picasso...",
    img: "../assets/old_artist_pp.jpg",
    text: "The Old Guitarist is a renowned painting by Pablo Picasso, created during his Blue Period in 1903-1904. This melancholic masterpiece portrays a blind musician hunched over his guitar, immersed in his music. The somber blue tones evoke a sense of sadness and isolation, characteristic of Picasso's Blue Period. Despite its bleak subject matter, The Old Guitarist is a poignant representation of human suffering and resilience. It remains one of Picasso's most iconic works, showcasing his mastery of emotional expression and artistic innovation."
  },
  {
    id: 13,
    title: "Water Lily Pond",
    author: "Oscar-Claude Monet",
    description: "Water Lily Pond by Monet...",
    img: "../assets/water_lilies_km.jpg",
    text: "Water Lily Pond is a captivating painting by Claude Monet, a pioneer of the Impressionist movement. Created in 1899, this masterpiece depicts Monet's beloved water garden at his home in Giverny, France. The painting captures the ethereal beauty of the water lilies floating on the surface of the pond, surrounded by lush vegetation and reflections of the sky. Monet's use of vibrant colors and loose brushstrokes creates a sense of movement and light, immersing the viewer in the tranquility of nature. Water Lily Pond is a testament to Monet's extraordinary talent and his lifelong dedication to capturing the essence of the natural world."
  },
  {
    id: 14,
    title: "Houses of Parliament, Sunset",
    author: "Oscar-Claude Monet",
    description: "Houses of Parliament at sunset...",
    img: "../assets/houses_sunset_km.jpg",
    text: "Houses of Parliament, Sunset is a stunning depiction of the British Parliament buildings along the River Thames in London, painted by Claude Monet in 1903. This iconic series of paintings showcases Monet's fascination with capturing the interplay of light, color, and atmosphere. In this particular artwork, Monet depicts the Houses of Parliament bathed in the warm glow of the setting sun, with the river shimmering in hues of orange and gold. The play of light and shadow creates a dynamic and atmospheric scene, imbuing the architecture with a sense of grandeur and majesty. Houses of Parliament, Sunset exemplifies Monet's mastery of Impressionist techniques and his ability to evoke emotion through his art."
  },
  {
    id: 15,
    title: "Bouquet of Sunflowers",
    author: "Oscar-Claude Monet",
    description: "Sunflowers bouquet by Monet...",
    img: "../assets/bouquet_sunflowers_km.jpg",
    text: "Bouquet of Sunflowers is a vibrant still-life painting by Claude Monet, completed in 1881. In this artwork, Monet showcases a lush bouquet of sunflowers arranged in a vase, capturing the brilliance of their golden petals and the play of light upon their surfaces. The loose, gestural brushwork and vibrant color palette exemplify Monet's Impressionist style, which sought to capture the fleeting effects of light and color in nature. Bouquet of Sunflowers is not only a celebration of the beauty of the natural world but also a testament to Monet's mastery of capturing its essence on canvas."
  },
  {
    id: 16,
    title: "The Beach at Pourville",
    author: "Oscar-Claude Monet",
    description: "Beach at Pourville by Monet...",
    img: "../assets/beach_pourville_km.jpg",
    text: "The Beach at Pourville is a captivating seascape painted by Claude Monet in 1882. Set along the Normandy coast, this artwork captures the serene beauty of the beach at Pourville, with its rugged cliffs, sandy shores, and shimmering sea. Monet's bold use of color and expressive brushwork conveys the ever-changing play of light and atmosphere along the coastline. The vibrant hues of blue and green evoke the freshness of the sea and the sky, while the dappled sunlight creates dynamic patterns on the sand. The Beach at Pourville is a testament to Monet's ability to capture the transient effects of nature with spontaneity and sensitivity."
  }
];

export default demoPics;