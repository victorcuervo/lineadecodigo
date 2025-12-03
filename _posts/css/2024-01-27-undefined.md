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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEKZWY4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC%2BcvMKRUpL6ft5RnLv8bCh5SEtPhkaHBMYb3mDQxGL7wIhANZPyiRcxCS2nhu7zahTV3AT0Nkc0lQaV0TA4cDRXn9TKv8DCCgQABoMNjM3NDIzMTgzODA1IgzNk84n087L7sVhPEQq3APdRuTILXGxhKkbSYEkyBaDZAOyumbSkcnYgvKhlsWqYDONW9hdnBc1a2IxGbqIM0m5v6VDfpwCP3inFfRPS4yl7mENL0ejSxw1izjGfoEPXTk1dCWJcicKUEQm6v2nWExBkFTqPXcReCUIWCan1Xj03EE1DzfrwaRVupOLpUu3OKEfBLkLM2HNQklBHNwNEJU7VIghNub442DO395BS0JDHaXSxcwuGQs1JPmsI6Ce9LgS4WPVYqsiKHMDpaZQ8RVmRnWg1FEqIfOp34AEvNNO00BD4VicM3zBH%2B%2FPF2bWx6L4oZowmEIkVWO%2BKK7lQ7u6eBM%2BBfRGIps3TXAI2QMNo6nItmUJvkOPA2gpho8KnQ%2Fv2jgtsCeDVt8jqg3Or2z4Eqc3kdEm4Le7xX5Oyb5wo%2B%2B8YmV2s2fqYNe66OTVLW4%2BPhm7YToUNH6jOAFI41iqOdm%2B7M4Wc%2BHY6cIPpBypgQIExdw52mhswpq8a07g9pcOTHHKzbvnbJ08L9y1vXREWnYp064eSwJAyrfd8%2FfmlJHjcraN98k3gx8DBJYD5mtbuOXbbTlkBc0luz3BEG%2BgGwRjN%2BXeyyvIewmOGMqfLBLvhLD60vscFtBeRjs8VTFR3I0iOTynCOgDXDCkur%2FJBjqkAbgZgfoAQF7I2W170xrcKhS1S9hhSXYYbkb6NCVp%2BUk7vzutEzSD296EzCbZ44nn3SxO1l%2FbYYyl%2FjfNIgclHrxEU48PPOi3s956wd9ET6iPJQxJMIaP5CKSLbzpdukT8j2bq9XLPYmPDBLqNCsHrkBIcYFJx38OSogqUu8E3sKRKB%2FSIHUIy2OWqHQWcYnEw9tW2h9nbNOQM09ErNWE27JdSadJ&X-Amz-Signature=0f13150ca5dbb9ef1fa3e8078cbe8f0af3f093b53eda14026372f416893e559d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEKZWY4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQC%2BcvMKRUpL6ft5RnLv8bCh5SEtPhkaHBMYb3mDQxGL7wIhANZPyiRcxCS2nhu7zahTV3AT0Nkc0lQaV0TA4cDRXn9TKv8DCCgQABoMNjM3NDIzMTgzODA1IgzNk84n087L7sVhPEQq3APdRuTILXGxhKkbSYEkyBaDZAOyumbSkcnYgvKhlsWqYDONW9hdnBc1a2IxGbqIM0m5v6VDfpwCP3inFfRPS4yl7mENL0ejSxw1izjGfoEPXTk1dCWJcicKUEQm6v2nWExBkFTqPXcReCUIWCan1Xj03EE1DzfrwaRVupOLpUu3OKEfBLkLM2HNQklBHNwNEJU7VIghNub442DO395BS0JDHaXSxcwuGQs1JPmsI6Ce9LgS4WPVYqsiKHMDpaZQ8RVmRnWg1FEqIfOp34AEvNNO00BD4VicM3zBH%2B%2FPF2bWx6L4oZowmEIkVWO%2BKK7lQ7u6eBM%2BBfRGIps3TXAI2QMNo6nItmUJvkOPA2gpho8KnQ%2Fv2jgtsCeDVt8jqg3Or2z4Eqc3kdEm4Le7xX5Oyb5wo%2B%2B8YmV2s2fqYNe66OTVLW4%2BPhm7YToUNH6jOAFI41iqOdm%2B7M4Wc%2BHY6cIPpBypgQIExdw52mhswpq8a07g9pcOTHHKzbvnbJ08L9y1vXREWnYp064eSwJAyrfd8%2FfmlJHjcraN98k3gx8DBJYD5mtbuOXbbTlkBc0luz3BEG%2BgGwRjN%2BXeyyvIewmOGMqfLBLvhLD60vscFtBeRjs8VTFR3I0iOTynCOgDXDCkur%2FJBjqkAbgZgfoAQF7I2W170xrcKhS1S9hhSXYYbkb6NCVp%2BUk7vzutEzSD296EzCbZ44nn3SxO1l%2FbYYyl%2FjfNIgclHrxEU48PPOi3s956wd9ET6iPJQxJMIaP5CKSLbzpdukT8j2bq9XLPYmPDBLqNCsHrkBIcYFJx38OSogqUu8E3sKRKB%2FSIHUIy2OWqHQWcYnEw9tW2h9nbNOQM09ErNWE27JdSadJ&X-Amz-Signature=da4307f5aee31274cd75a8b1888ad1445f6366b295fc2c567e2704794c6deb1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

