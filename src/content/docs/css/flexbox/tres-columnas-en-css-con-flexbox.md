---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KRRFXE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIGF2bhmkmzCWkYSNOIRMTY2BhA1m4YgYIIhuIc72JcGCAh9ZuYSSvSNK%2FIf9QuvvEml2v5eIDEHOKGLK2P%2FRp6TFKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoNgkFoOuU3pItdK0q3ANtjcP0eB7u2HjQy6U7ymL5OcAMe78aSLw7YKvIiQMEYxKKKMfRKEplYjLGXt3hsF0MfhlRy61qq%2BE%2Fp9nH%2FLaWq9ZrQtCRd2rxc3QUpiUUNmap0c7DGTs3pNWnvvza4h%2F3r1OXs1sPjXl0pH5LDFvoYRy%2BhURckVuDrhkR%2Bq5j8qQFO6NydK0pTOFEV3T%2BfcaK%2BONCcaQPs%2Btl6UFU%2Fs6aHm2dHhROXwVhEGt3%2FamH6OWeWvFyCP3yItHF685CVTg6TGdt%2BgYjAaKZse3yWQl%2FpodvfvCCR%2Fh9r0osz6CUBiUqCTHaIZ52WlBnQEhDMu2Y5fYgypwcw2thRGGxawF5ZNOsAeniwX3EeTlAZpGYp7XQTsGM1TG8Z23mmNxxSC2eSLcz1iYnUUpmb7OmD%2Fl52D%2BfSkjBh8Of2O4FGsUXxWCTQE8SyEeVc7d7gExOFUnvGnqaHrTfKaVyAVXiFkjaJXi5wqv2hsCBPBp%2F1anOHaMudY2GGDws3PBOh9KSV1Ua7TJqIT9sNvz2WetfRbGeqkS0ON%2BIRGomrdGtyVBMDHYToY3Z4IiUWFdc39EbgpMzy%2FlqlFCpt4caa1QzhzC9BBPKYbZNuzCf6h%2BIk5K0hdXb0C9%2Bh8TgWXgJ4zD57NnJBjqnASeTWkWEywz5Vwn9rMRua1q6LDc0DcOtTbeGLsn%2FLenQnf4WhQXej%2BmNp7AwK3nqCtbuxDETF77zKjSYflVKnMq1skcu2iV7KEIp%2FfvhqKf5lyUfKQPHvtn%2B6UmCbLh8ZmXb2DO9jrT6E1IZ3%2FkH2CR5tp1ZnK%2FeeHAmkR7wL173sc5GUgqppf7ukfRWPPiNdScrqmj%2BfBsPZFoTjOnJQmtH4ZV5bokv&X-Amz-Signature=c5182c51a9dd6c93e6f47e89e1e3bb7aaaae68d5455230e2bf079ddfcf0e5281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4KRRFXE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIGF2bhmkmzCWkYSNOIRMTY2BhA1m4YgYIIhuIc72JcGCAh9ZuYSSvSNK%2FIf9QuvvEml2v5eIDEHOKGLK2P%2FRp6TFKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoNgkFoOuU3pItdK0q3ANtjcP0eB7u2HjQy6U7ymL5OcAMe78aSLw7YKvIiQMEYxKKKMfRKEplYjLGXt3hsF0MfhlRy61qq%2BE%2Fp9nH%2FLaWq9ZrQtCRd2rxc3QUpiUUNmap0c7DGTs3pNWnvvza4h%2F3r1OXs1sPjXl0pH5LDFvoYRy%2BhURckVuDrhkR%2Bq5j8qQFO6NydK0pTOFEV3T%2BfcaK%2BONCcaQPs%2Btl6UFU%2Fs6aHm2dHhROXwVhEGt3%2FamH6OWeWvFyCP3yItHF685CVTg6TGdt%2BgYjAaKZse3yWQl%2FpodvfvCCR%2Fh9r0osz6CUBiUqCTHaIZ52WlBnQEhDMu2Y5fYgypwcw2thRGGxawF5ZNOsAeniwX3EeTlAZpGYp7XQTsGM1TG8Z23mmNxxSC2eSLcz1iYnUUpmb7OmD%2Fl52D%2BfSkjBh8Of2O4FGsUXxWCTQE8SyEeVc7d7gExOFUnvGnqaHrTfKaVyAVXiFkjaJXi5wqv2hsCBPBp%2F1anOHaMudY2GGDws3PBOh9KSV1Ua7TJqIT9sNvz2WetfRbGeqkS0ON%2BIRGomrdGtyVBMDHYToY3Z4IiUWFdc39EbgpMzy%2FlqlFCpt4caa1QzhzC9BBPKYbZNuzCf6h%2BIk5K0hdXb0C9%2Bh8TgWXgJ4zD57NnJBjqnASeTWkWEywz5Vwn9rMRua1q6LDc0DcOtTbeGLsn%2FLenQnf4WhQXej%2BmNp7AwK3nqCtbuxDETF77zKjSYflVKnMq1skcu2iV7KEIp%2FfvhqKf5lyUfKQPHvtn%2B6UmCbLh8ZmXb2DO9jrT6E1IZ3%2FkH2CR5tp1ZnK%2FeeHAmkR7wL173sc5GUgqppf7ukfRWPPiNdScrqmj%2BfBsPZFoTjOnJQmtH4ZV5bokv&X-Amz-Signature=d168b968ae9a989eddf22cb8d1d6c289331338d66f58e4b463c05b9317ef4054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

