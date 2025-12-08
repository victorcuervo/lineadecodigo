---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIJBYUZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGCLs1ozQyEBIHRTVHqf4o2PgLMimcr8hsSsRbfCjiHgIgOK1X9yp7As8NdGCdttH5nkhS3UY3iLOgbUJdslYypgkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq%2BWj4i9zxOtZo2wircA0BMXGZRHIFmfmztx9g2FKPL5HJb9QwwiqlEb3iMj%2FH83tCDPG2ewBKFImANcM%2BI07xSG9hpO3vlq3QKX3XXVz1wtSqWq6b9ZusBoGtn6PoKX6i3eMkqO8iDHCqVaSgl%2BVsJUqlxta68Og%2FtYAwcaYtpBaD7pfeQsUJfI27Zp%2BlA1gn5%2FQBJGVcnwYAK8Reex1hLMqQVRyiQZVwBiPLmCZrSe4JBnch%2F22vzZGLSynkpH3VQobFK5K%2FQh5b98lwHQ4XsU%2Fd5RFuwS9K37hjohrcXNv5FEU%2FvSGWoZHgjnmdtSa3y1vLaeyy3yccw9h1Ao2dPPKOv7l9gqhbO87i9KflMNA29qpXCMtw9feIW0kDoOFv6lwtSnCroSsJ1VYlsti9xJ5wgR%2FpMpgcssoPOAu7kDlENHhy10jrh36ZNixJoXKH3erpAGKFRwSLEWhmsc%2BWq06ewXT9Vsc2lygspph7lTpchG%2BuDH1w6jSIKWbXZCh3rWMleC2omY9b2Fja60E0TxIX%2FxIgxpFq%2Fl7UKMz5pRinZcr3n3fUkUBjm0cdEjbyMNgTwZMBnTHgYjv%2FoMVYrqDIO1jsk4hXLjXeHCaN2%2BO384Er%2FlPuFh14PwBUYJMCIRnyc1ZJmfdAYMOzu2MkGOqUBa%2B4mn4rPgOExAnU9kdRqINDFFSRQNwlT2%2Bwi7mMfSnA5fmoLwxwZuuAwzoNUNyznIFsbP%2BaDzE3KL9ydE%2FUdNyKAe3QLCHuBifHrTyNJWY9xP1zpC86sUmnKAg0Qg51A1aYvSzLo8M5rNa1JS8NHPfAU4DvWOhsqgrdlRU%2BYTQCBpeEn895sQz%2BJ14M3gheiHuAnELBpzh%2Bl4%2B00HZVr5EfbGMQw&X-Amz-Signature=f0713d4a825f9ebd4cc2a98a41847b562c6b8171d85f862315a690e8a0f477bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIJBYUZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T034623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGCLs1ozQyEBIHRTVHqf4o2PgLMimcr8hsSsRbfCjiHgIgOK1X9yp7As8NdGCdttH5nkhS3UY3iLOgbUJdslYypgkqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFq%2BWj4i9zxOtZo2wircA0BMXGZRHIFmfmztx9g2FKPL5HJb9QwwiqlEb3iMj%2FH83tCDPG2ewBKFImANcM%2BI07xSG9hpO3vlq3QKX3XXVz1wtSqWq6b9ZusBoGtn6PoKX6i3eMkqO8iDHCqVaSgl%2BVsJUqlxta68Og%2FtYAwcaYtpBaD7pfeQsUJfI27Zp%2BlA1gn5%2FQBJGVcnwYAK8Reex1hLMqQVRyiQZVwBiPLmCZrSe4JBnch%2F22vzZGLSynkpH3VQobFK5K%2FQh5b98lwHQ4XsU%2Fd5RFuwS9K37hjohrcXNv5FEU%2FvSGWoZHgjnmdtSa3y1vLaeyy3yccw9h1Ao2dPPKOv7l9gqhbO87i9KflMNA29qpXCMtw9feIW0kDoOFv6lwtSnCroSsJ1VYlsti9xJ5wgR%2FpMpgcssoPOAu7kDlENHhy10jrh36ZNixJoXKH3erpAGKFRwSLEWhmsc%2BWq06ewXT9Vsc2lygspph7lTpchG%2BuDH1w6jSIKWbXZCh3rWMleC2omY9b2Fja60E0TxIX%2FxIgxpFq%2Fl7UKMz5pRinZcr3n3fUkUBjm0cdEjbyMNgTwZMBnTHgYjv%2FoMVYrqDIO1jsk4hXLjXeHCaN2%2BO384Er%2FlPuFh14PwBUYJMCIRnyc1ZJmfdAYMOzu2MkGOqUBa%2B4mn4rPgOExAnU9kdRqINDFFSRQNwlT2%2Bwi7mMfSnA5fmoLwxwZuuAwzoNUNyznIFsbP%2BaDzE3KL9ydE%2FUdNyKAe3QLCHuBifHrTyNJWY9xP1zpC86sUmnKAg0Qg51A1aYvSzLo8M5rNa1JS8NHPfAU4DvWOhsqgrdlRU%2BYTQCBpeEn895sQz%2BJ14M3gheiHuAnELBpzh%2Bl4%2B00HZVr5EfbGMQw&X-Amz-Signature=3a082c9eaf395355349877ac342ae3bc28b3152856b4e66048b6f6cb305756bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

