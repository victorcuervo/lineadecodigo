---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKQGFDR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEnY91IBZtxEa04L9%2FBOZdezYHbG324gjjwbvx3jTdymAiAfK0Wq0Jn4J8RBnBG0eijog729s933TvotuBRGM1K5CCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMe8TrjRwguGgQ1sxkKtwDxQa5hmFL13Xf3fzSkK4F4hK1OibdUjXgyl95z1U0bnKZ5hBd8fb9voy%2B%2BhT2Z4iI9lyBGKIbbMrM8Y2ijks%2FQLdR65vCAsxq01BUtWxj0wW%2FG2B5s%2BCFbmeuApB6h3dZ05aY4lRcH8s0ZDez%2B%2Ffh8EY9CaVL%2BAFQhd7g1B%2FJnEU%2Fuae3v%2BTOSJ4paRt8Sv9%2Ff9eFliT18hAsY396mCrdWKZeuJ64Oj%2Bihe9eQhKOnqwQL0Nn1EK9TsDTnnqtsYCoC12cwhiy2%2BJ4zj%2FgGE7b2e%2B6PRlwZe3G15IE3RRYdXT15t3t7kI58TAk5rx7yU2z9vksdFx88Wyo8qw5psg1XDteeq%2FpjpF0ELY85Jxc04hJacLjewHkenwCfE8e8UrrAYhXwbVPOK8fd7WowesBy6FkMN3RdgQhkyEumhQEBpzX2AqoMK%2FI4fSQQxo0lTa2pjh0CaPJHxTzXDya4gCYV81K%2FQZAsci2s%2Br5gnILo5b5r2TIspurio2nzUsWN5zFeLV2tE0bPvi%2BO5iQosydRAa9X73giozi%2FXZoKoRCT%2FTTNIFLmIbiof1y2eb%2BokqGJ4qom%2BAl7EsYmuspRgYLQqUpPrMLcPBgyvnI%2Fq1k6BC%2FzrCIQpmF5Rvnc%2BQwp4TGyQY6pgGM1GzIbgLP2a%2FoqwHnhc2j7%2FtRA6gvj9Ja2UbkHKMnyRTNR35o76PcU2UEP3qJyFmRyF4FpVVb9cPBvc3mnqheivcvY2YEkS5TJNRz%2BWBawA%2Bz02pp8I2YmnT9cCxAF5gw8%2F8%2F3JGxSzN%2BCqY2%2Fqy77pqQ4XuTyzX9B9M0v79iyb9rCByKRgs9jWRaPgn1r7nYKYg2E4rOZ6cOj7Geka9CGwtDXbRq&X-Amz-Signature=84f0e585fa349cd386990cdcf075df5151e45b1c03fbcf1b3b95db04974aad92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKQGFDR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEnY91IBZtxEa04L9%2FBOZdezYHbG324gjjwbvx3jTdymAiAfK0Wq0Jn4J8RBnBG0eijog729s933TvotuBRGM1K5CCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMe8TrjRwguGgQ1sxkKtwDxQa5hmFL13Xf3fzSkK4F4hK1OibdUjXgyl95z1U0bnKZ5hBd8fb9voy%2B%2BhT2Z4iI9lyBGKIbbMrM8Y2ijks%2FQLdR65vCAsxq01BUtWxj0wW%2FG2B5s%2BCFbmeuApB6h3dZ05aY4lRcH8s0ZDez%2B%2Ffh8EY9CaVL%2BAFQhd7g1B%2FJnEU%2Fuae3v%2BTOSJ4paRt8Sv9%2Ff9eFliT18hAsY396mCrdWKZeuJ64Oj%2Bihe9eQhKOnqwQL0Nn1EK9TsDTnnqtsYCoC12cwhiy2%2BJ4zj%2FgGE7b2e%2B6PRlwZe3G15IE3RRYdXT15t3t7kI58TAk5rx7yU2z9vksdFx88Wyo8qw5psg1XDteeq%2FpjpF0ELY85Jxc04hJacLjewHkenwCfE8e8UrrAYhXwbVPOK8fd7WowesBy6FkMN3RdgQhkyEumhQEBpzX2AqoMK%2FI4fSQQxo0lTa2pjh0CaPJHxTzXDya4gCYV81K%2FQZAsci2s%2Br5gnILo5b5r2TIspurio2nzUsWN5zFeLV2tE0bPvi%2BO5iQosydRAa9X73giozi%2FXZoKoRCT%2FTTNIFLmIbiof1y2eb%2BokqGJ4qom%2BAl7EsYmuspRgYLQqUpPrMLcPBgyvnI%2Fq1k6BC%2FzrCIQpmF5Rvnc%2BQwp4TGyQY6pgGM1GzIbgLP2a%2FoqwHnhc2j7%2FtRA6gvj9Ja2UbkHKMnyRTNR35o76PcU2UEP3qJyFmRyF4FpVVb9cPBvc3mnqheivcvY2YEkS5TJNRz%2BWBawA%2Bz02pp8I2YmnT9cCxAF5gw8%2F8%2F3JGxSzN%2BCqY2%2Fqy77pqQ4XuTyzX9B9M0v79iyb9rCByKRgs9jWRaPgn1r7nYKYg2E4rOZ6cOj7Geka9CGwtDXbRq&X-Amz-Signature=5041a17a189d33c6351784d0050936a8371e11200fcbd1d282b85fc4b9630b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

