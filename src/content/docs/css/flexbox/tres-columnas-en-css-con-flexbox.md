---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CN7SR2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhahfrWK67SbG3xXWDH29BW6vk6JM%2BKPLo%2FlF6L9jSlAiEAlsSEaQ6XwbLYEJtHWsjBCOqlHZKI5torZ8DiwMZtYEQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDh9MbPua9tKK%2Fs4QCrcA%2FVTMy44YcPhQhVmy1iyNPOGmdAPbNc9Y3z0rS9l1Y8wAqjgMd2wuAUeaQfYdZNScnHxJuSUPKSs3q02zOWCZqM1rIw8LDCIfrH%2FSHo%2F%2B1kUtW8n9a6VmPjYXa27N6mdfm0SwA6t4w6ZyLkayNbSEe1kOIZZsex7qgDqKVJH64NK6Szua10psjP1pbwUHQJ85zfDq%2BkfLfLv6VUiaKyP%2BjMDYUIBlU%2FfIBigfymeBvsPTvbqrQM7qh0WO%2BqqDeMcor9YZQtItt3drvN6Krfm9ums0Vu56ar8h%2FAPQu4KAdEDAU6HhTj6ojdPr2lXUlwX7P5DEdJlMFR%2B4GyJaFuPqtDu%2FzKI0qjZNjDojBuXQWsTgCK0vFA3wb69PrXZoRQTT5rmOCrGcqFY3La1vlZaxdR65f8YwWEk%2BPWoFwGszs0Tkinc4tVWrxu2jSXFZjRM4LcaUcDJCYY%2Be6DSTrAg1MMX9WsFOGSFcorw6svVqVvPs8K2T47O5rlfJR5KcxgITmm7BSntqa%2FxdGjlDdnrgnhvinmXvRIIdkXGilUEWQvz0CjJEmxasfiuY1malULrm1YSzr63BUKTueHsYS6YtoG%2FajPuegSk5s4oc9oWIj9MxSkDLiWOjMAFPAYiMN%2BKzskGOqUBIzDeNf0nLEZTione%2F0TjaXRJniULi81aMh3aG%2B0xfBAmWOwhWq%2FY3xf1wXgWhIDk%2BJUS1dGS3j4UU1xqJaBaFKKztTV4ifpaN5dBaXveClJp3fDp%2BDO0CxosxAQ0DfmZE7y%2F%2BjsGZ8xmCftbW%2BTjAhirhxDXtVb7iv4bZ2ggQLmgyAq%2B%2BGpzlN%2BXojZHZSkbKjK%2BV7K%2FLg11sSbJwiJ5P08CZIlU&X-Amz-Signature=abc80d4c557b50e16480cb0d04f3dca7df0156079138587a8d17a843e938be86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6CN7SR2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhahfrWK67SbG3xXWDH29BW6vk6JM%2BKPLo%2FlF6L9jSlAiEAlsSEaQ6XwbLYEJtHWsjBCOqlHZKI5torZ8DiwMZtYEQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDDh9MbPua9tKK%2Fs4QCrcA%2FVTMy44YcPhQhVmy1iyNPOGmdAPbNc9Y3z0rS9l1Y8wAqjgMd2wuAUeaQfYdZNScnHxJuSUPKSs3q02zOWCZqM1rIw8LDCIfrH%2FSHo%2F%2B1kUtW8n9a6VmPjYXa27N6mdfm0SwA6t4w6ZyLkayNbSEe1kOIZZsex7qgDqKVJH64NK6Szua10psjP1pbwUHQJ85zfDq%2BkfLfLv6VUiaKyP%2BjMDYUIBlU%2FfIBigfymeBvsPTvbqrQM7qh0WO%2BqqDeMcor9YZQtItt3drvN6Krfm9ums0Vu56ar8h%2FAPQu4KAdEDAU6HhTj6ojdPr2lXUlwX7P5DEdJlMFR%2B4GyJaFuPqtDu%2FzKI0qjZNjDojBuXQWsTgCK0vFA3wb69PrXZoRQTT5rmOCrGcqFY3La1vlZaxdR65f8YwWEk%2BPWoFwGszs0Tkinc4tVWrxu2jSXFZjRM4LcaUcDJCYY%2Be6DSTrAg1MMX9WsFOGSFcorw6svVqVvPs8K2T47O5rlfJR5KcxgITmm7BSntqa%2FxdGjlDdnrgnhvinmXvRIIdkXGilUEWQvz0CjJEmxasfiuY1malULrm1YSzr63BUKTueHsYS6YtoG%2FajPuegSk5s4oc9oWIj9MxSkDLiWOjMAFPAYiMN%2BKzskGOqUBIzDeNf0nLEZTione%2F0TjaXRJniULi81aMh3aG%2B0xfBAmWOwhWq%2FY3xf1wXgWhIDk%2BJUS1dGS3j4UU1xqJaBaFKKztTV4ifpaN5dBaXveClJp3fDp%2BDO0CxosxAQ0DfmZE7y%2F%2BjsGZ8xmCftbW%2BTjAhirhxDXtVb7iv4bZ2ggQLmgyAq%2B%2BGpzlN%2BXojZHZSkbKjK%2BV7K%2FLg11sSbJwiJ5P08CZIlU&X-Amz-Signature=79cdf06f1d5f067105d02562741a6f496ec6d76a192ad87bcb154c1be694bd82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

