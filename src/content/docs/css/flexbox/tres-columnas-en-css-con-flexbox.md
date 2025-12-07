---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGITIKRV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn7kN5JB5DBziTGzeH0rMl1rJgN9qGFPndItYPiCdiWwIhALWM7awxPp1EYpri0RnQEmsF8lFAqHlD8w9e1PpWGCvYKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxIixx8aI47maxwSMq3AMeqAaTi18sg8G0YPtiTEvSBBFPUwl%2F%2FuJxlQR6YcN34qk7YIGvuX3P7OhOXyqAXPS3pilw%2F9eKMYABVwQ%2FblV4bTO4ypf7ZKEBFSF%2FtTSnAbot44%2FP2EfhJPbrBul1wh94%2BPw4izrALgdvCF1jJqnVNbs7k1g6V8J7ZfSTWSbcECw7rZXCHOpoai2uoJaew1PiBfON2wCsBUoYVnHQPh8yDzeo7q0bsBXMug9Cn2VU%2FI4PFw8TnotBn2BBK4gHl%2FHNL5J6agAoDNJwqyZ2PP2mBz0NlQvAHIhqpsrMvJomODUnllxhvflmWF9PDx07W5%2FiFr84Cb28iF7H7Ngu4cjF1cqWCsvmYsURMT73qV2HUr7g7SgiRBZaFVzIkd2yUF%2BJPYthhiaARu41j%2BGzZTmfztKdUxvCnKA5UoSG7fOMHxrvI5%2BFGP2HMIDAXk7bPq6ZH2xMzh6AxZQbKk9vx%2BkeW7g7lz3B%2BdnPNn5IqfpUabhVfTM%2Fd%2B%2B13TFtpgzNrD62jnNIYi%2FfNOThX50MefCsCnAijOWVJ%2BP6HgOJVpQwtjh9ArhsS4dlPtNQh%2BAfDOhW1SCFmBsTVltv2OnTpV%2FxVKAlk30nfwTyHNSITiQWiS6Lyy8wmggDr16r2DD%2FuNbJBjqkAfCyuEhg0oCmbB1XPQn6QYEYTGMnmRtNUQ6uBbjQ9lVRlt5azciDRShRQcIMGK41itmJT8jnkiJ5xO%2BJMK6KF6oQYyB3sFTtybzo75M%2FAnBd%2FrWSYVqa0M%2FZye6XC460wwEkZP2DV3fIBtxRuvTGDnP6Mc8ZTl46fStJy%2F8UhHt4%2BPqt5Rk9hDIyi7UkacSsDM2jUjL6FLVKwNyP23AbUTD7AkET&X-Amz-Signature=a0a220880c3acd8eeceed175d465a14a7ac24f2a3a21ac9ec5f8616158e1bad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGITIKRV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn7kN5JB5DBziTGzeH0rMl1rJgN9qGFPndItYPiCdiWwIhALWM7awxPp1EYpri0RnQEmsF8lFAqHlD8w9e1PpWGCvYKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxIixx8aI47maxwSMq3AMeqAaTi18sg8G0YPtiTEvSBBFPUwl%2F%2FuJxlQR6YcN34qk7YIGvuX3P7OhOXyqAXPS3pilw%2F9eKMYABVwQ%2FblV4bTO4ypf7ZKEBFSF%2FtTSnAbot44%2FP2EfhJPbrBul1wh94%2BPw4izrALgdvCF1jJqnVNbs7k1g6V8J7ZfSTWSbcECw7rZXCHOpoai2uoJaew1PiBfON2wCsBUoYVnHQPh8yDzeo7q0bsBXMug9Cn2VU%2FI4PFw8TnotBn2BBK4gHl%2FHNL5J6agAoDNJwqyZ2PP2mBz0NlQvAHIhqpsrMvJomODUnllxhvflmWF9PDx07W5%2FiFr84Cb28iF7H7Ngu4cjF1cqWCsvmYsURMT73qV2HUr7g7SgiRBZaFVzIkd2yUF%2BJPYthhiaARu41j%2BGzZTmfztKdUxvCnKA5UoSG7fOMHxrvI5%2BFGP2HMIDAXk7bPq6ZH2xMzh6AxZQbKk9vx%2BkeW7g7lz3B%2BdnPNn5IqfpUabhVfTM%2Fd%2B%2B13TFtpgzNrD62jnNIYi%2FfNOThX50MefCsCnAijOWVJ%2BP6HgOJVpQwtjh9ArhsS4dlPtNQh%2BAfDOhW1SCFmBsTVltv2OnTpV%2FxVKAlk30nfwTyHNSITiQWiS6Lyy8wmggDr16r2DD%2FuNbJBjqkAfCyuEhg0oCmbB1XPQn6QYEYTGMnmRtNUQ6uBbjQ9lVRlt5azciDRShRQcIMGK41itmJT8jnkiJ5xO%2BJMK6KF6oQYyB3sFTtybzo75M%2FAnBd%2FrWSYVqa0M%2FZye6XC460wwEkZP2DV3fIBtxRuvTGDnP6Mc8ZTl46fStJy%2F8UhHt4%2BPqt5Rk9hDIyi7UkacSsDM2jUjL6FLVKwNyP23AbUTD7AkET&X-Amz-Signature=62916549ebae87f80537da43eabae53f73cf8462cd91858ac5263cf7e7270e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

