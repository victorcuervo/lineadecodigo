---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6IDP64%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA%2FanrDhybchPnDyi5JcX1qf6xYKFneq7RUoHJ7%2FKlSfAiEAsjido8aloILd%2Bf3MJ8GGczsHL8gTahoNvC8jOl6rzykq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ9enn161Tf8tn%2FxmSrcA1iykDQfS2aEDAHQlk2jU0GeM74CtRJ9ZUuegFKjHJmvDy%2B5Vm9%2BZCieWR8JLFAOpTamC5IlgCEnwAwtXPbZxoCabFGWQ5rZw9MgNa4YTZyUPcJ5SSn%2FT1xfczrHh3z%2BQLSljBFkB38kOkc28sLqFWu%2B6cesZyoYWBSMklGc8f7bhSuMU3bkyL3p31JFU%2F%2F%2BAMmUwpTiiW3lNjPxA69OD9Y%2BqKRte8MJXTtK3UA3imCeNBVWvfZZ8zBMcT2T%2B2CdRWYE1ZsBmXK6QOsMI3SqIA90rL4cxEWb4i%2FDHrwmm0IWLHGQUmkNPJ9Ui6SBayWDv2ywrgejuALUHk4yHwN1D%2F2YK5Fyo%2BrrjSzsAk567%2Fph1jaOgQUhQlmC9XN5hHGuCsS5CRMTE1pviZC%2BXOZdgUZq0vdIP0hSlFGavGP9yfZx9D1GOOri%2B%2BHBx284Lo32RQTN%2FwTpbg0PvHPWDAFnaGjKXZZ80T6I8Zc6WhMcQZiCeGtjaM5eboUyyPn0Mq%2BCFecGi5xEITmmdRSOyC%2Bdfcso5C%2F8m5j6lHxWejYheuI9nYaWrsZk1kFQrRsKjOGKRSqU8UHe%2FQljX8l%2F3kFLPEyOkrzPw1DjI3wj5NhIVn%2F50OI1aa26Lx7jNB%2BzMOHkvckGOqUByAcnFDVAbzzmMoYjf0fWVmuTRqmQtgR%2BlvpdkspLCNmvG2iiphp7xEGoCl6hmx1FSL80b8R22A9MKpJbWaRzCxk0oPEj0ddE%2FE7ZqfMO6kMz5tVdeGRX%2BvmrUProJCwGDRZ6GKlkzN9S5sFfWimsrVq3bU223B5b81MBlAoCqzLTK1Lr11WiP0%2FI5wxSlKJcChh62K%2Bl%2BKl0Ppi%2BlPOPDxiiaQ0H&X-Amz-Signature=288a5df51de05cc4f7d332329632c0b70340a0c7871f20c9ad7af3128cd72973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA6IDP64%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA%2FanrDhybchPnDyi5JcX1qf6xYKFneq7RUoHJ7%2FKlSfAiEAsjido8aloILd%2Bf3MJ8GGczsHL8gTahoNvC8jOl6rzykq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJ9enn161Tf8tn%2FxmSrcA1iykDQfS2aEDAHQlk2jU0GeM74CtRJ9ZUuegFKjHJmvDy%2B5Vm9%2BZCieWR8JLFAOpTamC5IlgCEnwAwtXPbZxoCabFGWQ5rZw9MgNa4YTZyUPcJ5SSn%2FT1xfczrHh3z%2BQLSljBFkB38kOkc28sLqFWu%2B6cesZyoYWBSMklGc8f7bhSuMU3bkyL3p31JFU%2F%2F%2BAMmUwpTiiW3lNjPxA69OD9Y%2BqKRte8MJXTtK3UA3imCeNBVWvfZZ8zBMcT2T%2B2CdRWYE1ZsBmXK6QOsMI3SqIA90rL4cxEWb4i%2FDHrwmm0IWLHGQUmkNPJ9Ui6SBayWDv2ywrgejuALUHk4yHwN1D%2F2YK5Fyo%2BrrjSzsAk567%2Fph1jaOgQUhQlmC9XN5hHGuCsS5CRMTE1pviZC%2BXOZdgUZq0vdIP0hSlFGavGP9yfZx9D1GOOri%2B%2BHBx284Lo32RQTN%2FwTpbg0PvHPWDAFnaGjKXZZ80T6I8Zc6WhMcQZiCeGtjaM5eboUyyPn0Mq%2BCFecGi5xEITmmdRSOyC%2Bdfcso5C%2F8m5j6lHxWejYheuI9nYaWrsZk1kFQrRsKjOGKRSqU8UHe%2FQljX8l%2F3kFLPEyOkrzPw1DjI3wj5NhIVn%2F50OI1aa26Lx7jNB%2BzMOHkvckGOqUByAcnFDVAbzzmMoYjf0fWVmuTRqmQtgR%2BlvpdkspLCNmvG2iiphp7xEGoCl6hmx1FSL80b8R22A9MKpJbWaRzCxk0oPEj0ddE%2FE7ZqfMO6kMz5tVdeGRX%2BvmrUProJCwGDRZ6GKlkzN9S5sFfWimsrVq3bU223B5b81MBlAoCqzLTK1Lr11WiP0%2FI5wxSlKJcChh62K%2Bl%2BKl0Ppi%2BlPOPDxiiaQ0H&X-Amz-Signature=8782eda32fcae6c51a70ad87af76de97493922b0e650862219c8d292610a5baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

