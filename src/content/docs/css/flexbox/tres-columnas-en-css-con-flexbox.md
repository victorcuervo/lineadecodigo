---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GSZBNY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF26EzDjixOywzepVC1cWcchcaWv9Dg6lNQewsh%2FL3lKAiAuXvoStKxtFbYZvqhRpUbZe3p9cuswAXwbMyDKLo2DOir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMd%2FxVwqsK3IWKpbW5KtwDX7mBuddnAlEBHw8gtqxRJm5JvS2QCqS7R%2B9sB1qbQFaWPjhlmECT9wDjyBMS%2FfK3AgaLJcEVyzQfq8NdtlHwoUcLHrwMqYVQlyc1xs2iv%2BDOD4qCeE66hZ00OjTcRnrXqx0cT%2FGQSzyfdNmQnZpLaugaFsmr3RyLQ3ufrdiEkvilK9uaVbAP%2BZAws0I7ElBV2G787tAN6wBL8zL%2Bq9Stl7V7jwqyV2QmxFnKhq0vpsdip8hMiolvtjjGtgXdmV0ZqsO325tV%2Bu608mogKdgqHh9tU7VhK6hu9lqor4MvxqQaTXHPiTb%2FADoVTn8AYBSt%2B00wGrNzFgMbG4VTGR%2BusO1UyokvcChuFNRK%2B6Pq0U088PBd7sAwC8sP3yxQ9sRdYN9eRDACVRtWhjEAVupJeTa9BeflA1EQna0sa0lGMRFvd8CzV4%2F0bv4n2S%2BjvtRPhsxNITnaWcHhX3dF8hrM2kVaIpAczxaClS%2BsG2gau2sSR3o7CRqSyQr%2BxSm0lySoOml95IikOYgBXrWXlnqa%2B2cbIS7oWHshysb4JvUgE6hGyZGu6HpgAEm2KArh3oEwZ6gYxU577xVqot0EzjdwNILhYVwb%2BBKw0Ig6i6%2BUBElw2pVK10zRk2LczlUwtK7JyQY6pgHflWyuwSC9rYHGqr4KSe%2B7q7y5U1nzvWY11PBJwVzFwo4wAf9IHfhaWmNB28KC7Q%2Bp2DcbG56xOlEV9SAAQAQODrJFbl9vkcz3W4mTI6Q2k53qut4JLkjwYSsa6eIZTnfPQQ%2FQQtv1dW2AHLaHcXrJGcJXhFiFifdhikaPJw9FSsTCECVQdoHJIh1AX5f1qH2K6UL0IzK7qyrjSy5CFer0N2I7hEeE&X-Amz-Signature=f8616a872d2915eb4b5c85d2f2ba79a4738bcfd38fb67b70b74d525d46c13778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633GSZBNY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T052922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF26EzDjixOywzepVC1cWcchcaWv9Dg6lNQewsh%2FL3lKAiAuXvoStKxtFbYZvqhRpUbZe3p9cuswAXwbMyDKLo2DOir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMd%2FxVwqsK3IWKpbW5KtwDX7mBuddnAlEBHw8gtqxRJm5JvS2QCqS7R%2B9sB1qbQFaWPjhlmECT9wDjyBMS%2FfK3AgaLJcEVyzQfq8NdtlHwoUcLHrwMqYVQlyc1xs2iv%2BDOD4qCeE66hZ00OjTcRnrXqx0cT%2FGQSzyfdNmQnZpLaugaFsmr3RyLQ3ufrdiEkvilK9uaVbAP%2BZAws0I7ElBV2G787tAN6wBL8zL%2Bq9Stl7V7jwqyV2QmxFnKhq0vpsdip8hMiolvtjjGtgXdmV0ZqsO325tV%2Bu608mogKdgqHh9tU7VhK6hu9lqor4MvxqQaTXHPiTb%2FADoVTn8AYBSt%2B00wGrNzFgMbG4VTGR%2BusO1UyokvcChuFNRK%2B6Pq0U088PBd7sAwC8sP3yxQ9sRdYN9eRDACVRtWhjEAVupJeTa9BeflA1EQna0sa0lGMRFvd8CzV4%2F0bv4n2S%2BjvtRPhsxNITnaWcHhX3dF8hrM2kVaIpAczxaClS%2BsG2gau2sSR3o7CRqSyQr%2BxSm0lySoOml95IikOYgBXrWXlnqa%2B2cbIS7oWHshysb4JvUgE6hGyZGu6HpgAEm2KArh3oEwZ6gYxU577xVqot0EzjdwNILhYVwb%2BBKw0Ig6i6%2BUBElw2pVK10zRk2LczlUwtK7JyQY6pgHflWyuwSC9rYHGqr4KSe%2B7q7y5U1nzvWY11PBJwVzFwo4wAf9IHfhaWmNB28KC7Q%2Bp2DcbG56xOlEV9SAAQAQODrJFbl9vkcz3W4mTI6Q2k53qut4JLkjwYSsa6eIZTnfPQQ%2FQQtv1dW2AHLaHcXrJGcJXhFiFifdhikaPJw9FSsTCECVQdoHJIh1AX5f1qH2K6UL0IzK7qyrjSy5CFer0N2I7hEeE&X-Amz-Signature=9847ae3033cca72c6f1a07800de35876a5706bab1fc6563767496fe97c18f5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

