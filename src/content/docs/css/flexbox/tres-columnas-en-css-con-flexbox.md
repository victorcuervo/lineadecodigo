---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKY65TY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3S%2FvlLA%2ByDWhowdzbe9b60mLftEfprAG6VjFmIv4hsAiEA9gvT1ZLuxgKkYTYkpB4TH29EE8bAh%2FrJ%2F%2Fm1Koq7t3gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B0S%2BT8Ao%2FtPcCDSCrcA1uwa2qdO8Xj63T%2BeIv55a8Sbs1V5lth7wHGhbf35Xr4rH9gTOwdsRNS0cxi2K%2BvQojQ0SGS9xH2n%2BLoDeHWz6CmZGIAwo3yYYADAg%2FhpO%2FN54odiEsiYsY6uWx2YFQFkVeg81aYbLlsKz9mI6XpUclmn4PZCs2jSzgGWxayUR%2Bo5ZVaBh5WvI4QNs27etBRuvJ77Tbn%2FCm7jRDVF8NqyUdihNQGKAlBsT5BJ0fB%2FGjiyU5HsJRoPc09WGycFjh9hjSSQnbVhLfe8jH3eA%2B%2FHH%2BhDCo41aKtTTr6GqaCEIHhUrbPKUuOHbB3KvjAMQujDIt%2Fu2ziAhn0IGiUYwXBBfeyKttItTnfreoxKRtEpemuM3HdQinGBbKqeU8v6vfqlRXAlm2rMu6Pjk622ioPrZMNEm7bn45pY%2Bj4s7Pq6Rb6m6RwTGzAdwEHBzKdx5Z7yoCQAPs8RDqNja9abfAyufri2xDeRf28WnfnCNTg%2Fc%2FN3vIQobGl5pFDpN%2Fp2mmIJ37O4IA%2FiiOrBBDbAqBEbDIFzMcgHUjRgzcAtgXO2FTOjN%2F6D%2BYbkn5KD%2FDCN71tKWyBN6KfyiFEVxB4HnTgSwxKJ9Hbrp7IvliyZ3LEbVLAjT8F4qAJWnMaha1XMNOZ1ckGOqUB2cppb8SYGQt3QItP3fdMfoHaK5z%2BsA%2BONTP1BBumTJeoAMD6EKjOtdWFXlly7OpGkhWu%2BCqzVu1iXqp0Cmg10OxbxO5t9cn5B54KQxQ7%2FDkRScWchf9%2FtmIA68eh28WPk7I563RMnliE3uCmLTSURCQmeEDDmyXVPudOntZFmM4lZ44u1QR%2FV808gBm%2BuYtuksgKc10F03CyRTsJHGGqYWWhS7Pw&X-Amz-Signature=1bd2effe6bc9bbe0b6243c87ffa11d8f7a19fb315f810a8ec9789fa9c71557fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKY65TY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3S%2FvlLA%2ByDWhowdzbe9b60mLftEfprAG6VjFmIv4hsAiEA9gvT1ZLuxgKkYTYkpB4TH29EE8bAh%2FrJ%2F%2Fm1Koq7t3gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL%2B0S%2BT8Ao%2FtPcCDSCrcA1uwa2qdO8Xj63T%2BeIv55a8Sbs1V5lth7wHGhbf35Xr4rH9gTOwdsRNS0cxi2K%2BvQojQ0SGS9xH2n%2BLoDeHWz6CmZGIAwo3yYYADAg%2FhpO%2FN54odiEsiYsY6uWx2YFQFkVeg81aYbLlsKz9mI6XpUclmn4PZCs2jSzgGWxayUR%2Bo5ZVaBh5WvI4QNs27etBRuvJ77Tbn%2FCm7jRDVF8NqyUdihNQGKAlBsT5BJ0fB%2FGjiyU5HsJRoPc09WGycFjh9hjSSQnbVhLfe8jH3eA%2B%2FHH%2BhDCo41aKtTTr6GqaCEIHhUrbPKUuOHbB3KvjAMQujDIt%2Fu2ziAhn0IGiUYwXBBfeyKttItTnfreoxKRtEpemuM3HdQinGBbKqeU8v6vfqlRXAlm2rMu6Pjk622ioPrZMNEm7bn45pY%2Bj4s7Pq6Rb6m6RwTGzAdwEHBzKdx5Z7yoCQAPs8RDqNja9abfAyufri2xDeRf28WnfnCNTg%2Fc%2FN3vIQobGl5pFDpN%2Fp2mmIJ37O4IA%2FiiOrBBDbAqBEbDIFzMcgHUjRgzcAtgXO2FTOjN%2F6D%2BYbkn5KD%2FDCN71tKWyBN6KfyiFEVxB4HnTgSwxKJ9Hbrp7IvliyZ3LEbVLAjT8F4qAJWnMaha1XMNOZ1ckGOqUB2cppb8SYGQt3QItP3fdMfoHaK5z%2BsA%2BONTP1BBumTJeoAMD6EKjOtdWFXlly7OpGkhWu%2BCqzVu1iXqp0Cmg10OxbxO5t9cn5B54KQxQ7%2FDkRScWchf9%2FtmIA68eh28WPk7I563RMnliE3uCmLTSURCQmeEDDmyXVPudOntZFmM4lZ44u1QR%2FV808gBm%2BuYtuksgKc10F03CyRTsJHGGqYWWhS7Pw&X-Amz-Signature=6be7ac4385d2c0c4eaf02569ad9161289ba5b34514c5f09f27c3193e5ea9eaf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

