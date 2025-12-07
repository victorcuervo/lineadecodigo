---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLZGCRM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOPYiz75RXIKQqCAFCLexAYBMl3FEER7a%2FB5h7PEkXzAiBGdIfw32N3VNumQ0nFtUumP8dRHNVTXhVk2jjhjMzUxyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvqshKNGd2zfZ%2F9FKtwDKiG0vUYUcGUsnbeJ%2BZSscltB5yNGvkDIMdCsZq9Q9RDynfhdGSeFEdCUAsfz9Hh7ilPFkg2uW%2BAaZmB8WzGsKfDPFPHEsRnziBUZWDQ%2FGJneWPdT0tTP%2FMTAFHu8I7hnox2vsRP%2Bb2kCWwrkz64S5s2EKzOGkHFUAuZmUHAaKg8x0K0uI0r6ybPrbfrtYuLxToa53RutNEWI%2FFpc7HqNMTJ9CpWPNFvKRixsNbCvIP%2BuMz0ZM1Z6gMMGG%2BJKPiAfEJX9%2F74Y5Sg4jFWhukc6pIM6PTZD6QeO0vNzNpf6Q9OsLm%2FpHtT6FXAQtyW5V%2Bgc2Oo%2Bv8aNPnbftO5S8MRfgP47tr7qx0ajF9P2oszBCG43OU44SghXg2bgyHda7d72Iea%2FJR3pYO6ArQXSpOBeFpqsEPrb%2BhvoB8vS%2BVg%2FHQI8LuvdlN6egq7JM11t3Uadeye4A4pPJLNOj4Tp65QMu18xt%2B2Ky2D59ienkerjdZkswJjwGW7FzYSYSU%2BwBGy4dNXtFTST9rEgcF0GoMg6UrWvXqSj%2FWLPoiSdJg88elDEoDTOCUMCZJ7eRw9vtHKnX2cSvpsUXSeZTUnl4GVl1rKqCi7WQ7l5UlHU2tW%2B2urWn4J4PgwrTMES33Ywy5nVyQY6pgFeSQK85LxVP%2FpMpW%2BWfgn7ajlrYL8%2FrwuhyRBs6JxkNblSK3HRwS70nsJQR4EWfgXwt28797gsFE8eh0r40YU6WxQkfFTL%2B0K%2FcqvooEhvdJeSEG%2Bj2INQ6WmQ66o8VvG5gpqwd7FdZP%2BdRd66kSGiihvpCujhsjFQAu%2FACsOQJ3tjL1vzZK7R1OikTFJlDPrLDFLgHCaOFrrY4%2F%2BCuXhxhl7yfzPP&X-Amz-Signature=a693c7b6489129fa24eac4a5b828eeb426f6007222438ed6684cca4f17e0d3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SLZGCRM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFOPYiz75RXIKQqCAFCLexAYBMl3FEER7a%2FB5h7PEkXzAiBGdIfw32N3VNumQ0nFtUumP8dRHNVTXhVk2jjhjMzUxyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqvqshKNGd2zfZ%2F9FKtwDKiG0vUYUcGUsnbeJ%2BZSscltB5yNGvkDIMdCsZq9Q9RDynfhdGSeFEdCUAsfz9Hh7ilPFkg2uW%2BAaZmB8WzGsKfDPFPHEsRnziBUZWDQ%2FGJneWPdT0tTP%2FMTAFHu8I7hnox2vsRP%2Bb2kCWwrkz64S5s2EKzOGkHFUAuZmUHAaKg8x0K0uI0r6ybPrbfrtYuLxToa53RutNEWI%2FFpc7HqNMTJ9CpWPNFvKRixsNbCvIP%2BuMz0ZM1Z6gMMGG%2BJKPiAfEJX9%2F74Y5Sg4jFWhukc6pIM6PTZD6QeO0vNzNpf6Q9OsLm%2FpHtT6FXAQtyW5V%2Bgc2Oo%2Bv8aNPnbftO5S8MRfgP47tr7qx0ajF9P2oszBCG43OU44SghXg2bgyHda7d72Iea%2FJR3pYO6ArQXSpOBeFpqsEPrb%2BhvoB8vS%2BVg%2FHQI8LuvdlN6egq7JM11t3Uadeye4A4pPJLNOj4Tp65QMu18xt%2B2Ky2D59ienkerjdZkswJjwGW7FzYSYSU%2BwBGy4dNXtFTST9rEgcF0GoMg6UrWvXqSj%2FWLPoiSdJg88elDEoDTOCUMCZJ7eRw9vtHKnX2cSvpsUXSeZTUnl4GVl1rKqCi7WQ7l5UlHU2tW%2B2urWn4J4PgwrTMES33Ywy5nVyQY6pgFeSQK85LxVP%2FpMpW%2BWfgn7ajlrYL8%2FrwuhyRBs6JxkNblSK3HRwS70nsJQR4EWfgXwt28797gsFE8eh0r40YU6WxQkfFTL%2B0K%2FcqvooEhvdJeSEG%2Bj2INQ6WmQ66o8VvG5gpqwd7FdZP%2BdRd66kSGiihvpCujhsjFQAu%2FACsOQJ3tjL1vzZK7R1OikTFJlDPrLDFLgHCaOFrrY4%2F%2BCuXhxhl7yfzPP&X-Amz-Signature=e8eeed1f360aa3bbb8847501e73b7928a348e6ea1f7486148768edb2bce4b670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

