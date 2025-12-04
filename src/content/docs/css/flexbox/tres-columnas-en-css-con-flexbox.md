---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RI7R22I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD185xYtBYluCiWJ3R6qZI4sQ%2F8mRF%2BV5GykYCgDWrO8gIgPzpc4%2FRpjNtbF7lBOeywsPIBzTzZZmbH4KDP8QiqwvIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMu76HVymogiB%2BfeIyrcA1Cvb15Kfq9fcz9amSNETvXnyEaWIJfM3XQHarxxt4w9Moyax%2B4XeF8bLjCXZ7XyD%2FyZSOhjlbHWLUSaF9CDbEMOh%2FpW1nySU9iOOe2OgRay%2Ffq17tPWlLVHi2oXW1g%2FHtjUPILJisPBVij20k3BbFePdbmyf2cX0FAPStHp1AkoA2aztJjgq2EVivx4Nhq%2FxWhzlWeL1hSv1slxvtHp4WvUQ6S8qP4hhmuji2wrktM6FLBWw5N5GQV4kOSs0bJrkKsOOjdOf4ylDPZu5KyplobMPPTL42zqZcMgwsOfvxzS5vHRRVIqa6n4PywzHpASoJTI22N9tPUDbBMTmZJlqF3mSKa%2FzAYObSxnb5hpX%2Fq1m%2BbhY9pHsBTqCOVLrYRO00cLCnSJ8OjBIBBgG6wzMVsctMLBBw64%2Fk6tUMWw9jK2UPztPV%2Fw5MbUlPtW985wGMrTefZhfmqUyv9UOkDzc29y8SiVE3jx%2FjeOUcO1lfZjeC64je0t%2BvCQqxp8R8FjV%2BcKm0XM%2FqT2ocVGezuP63%2FsBzaUfRoGVU93KlFBoiQiT54kIHfMtGP5lCQ5KbZxZWQDxFIhqrm5qlwju40sw9rY8k9RFkpGMyiU6r9Vt9bORr6BJe%2FD3Jh9JIisMLSMyMkGOqUBx%2FJ4vOfmiLxU2tDYzpLuQl%2FbqyutKjCU1gbmeslfNjR58xJoSLOKNXtF7tNxWTnsZFl3NOlCT4m%2F%2FM0Q0Wf%2BkK%2BPQKYs7cwrkCAoE%2FIf8loJQGwFgQ5Z6FioZudFrA1M%2FSqui45NRnhQOTsu085czCw3HkN6c%2FyfNNZ3O2gmCOcvXAfriMN0avsH1WfSrZfnH0Z8uzW%2FI4nRvUUGa5gkSox75sPM&X-Amz-Signature=051398c6db3fdd2cabf6cd71b07a157f6e11befff213b3d2ae44c66fd872d820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RI7R22I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD185xYtBYluCiWJ3R6qZI4sQ%2F8mRF%2BV5GykYCgDWrO8gIgPzpc4%2FRpjNtbF7lBOeywsPIBzTzZZmbH4KDP8QiqwvIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMu76HVymogiB%2BfeIyrcA1Cvb15Kfq9fcz9amSNETvXnyEaWIJfM3XQHarxxt4w9Moyax%2B4XeF8bLjCXZ7XyD%2FyZSOhjlbHWLUSaF9CDbEMOh%2FpW1nySU9iOOe2OgRay%2Ffq17tPWlLVHi2oXW1g%2FHtjUPILJisPBVij20k3BbFePdbmyf2cX0FAPStHp1AkoA2aztJjgq2EVivx4Nhq%2FxWhzlWeL1hSv1slxvtHp4WvUQ6S8qP4hhmuji2wrktM6FLBWw5N5GQV4kOSs0bJrkKsOOjdOf4ylDPZu5KyplobMPPTL42zqZcMgwsOfvxzS5vHRRVIqa6n4PywzHpASoJTI22N9tPUDbBMTmZJlqF3mSKa%2FzAYObSxnb5hpX%2Fq1m%2BbhY9pHsBTqCOVLrYRO00cLCnSJ8OjBIBBgG6wzMVsctMLBBw64%2Fk6tUMWw9jK2UPztPV%2Fw5MbUlPtW985wGMrTefZhfmqUyv9UOkDzc29y8SiVE3jx%2FjeOUcO1lfZjeC64je0t%2BvCQqxp8R8FjV%2BcKm0XM%2FqT2ocVGezuP63%2FsBzaUfRoGVU93KlFBoiQiT54kIHfMtGP5lCQ5KbZxZWQDxFIhqrm5qlwju40sw9rY8k9RFkpGMyiU6r9Vt9bORr6BJe%2FD3Jh9JIisMLSMyMkGOqUBx%2FJ4vOfmiLxU2tDYzpLuQl%2FbqyutKjCU1gbmeslfNjR58xJoSLOKNXtF7tNxWTnsZFl3NOlCT4m%2F%2FM0Q0Wf%2BkK%2BPQKYs7cwrkCAoE%2FIf8loJQGwFgQ5Z6FioZudFrA1M%2FSqui45NRnhQOTsu085czCw3HkN6c%2FyfNNZ3O2gmCOcvXAfriMN0avsH1WfSrZfnH0Z8uzW%2FI4nRvUUGa5gkSox75sPM&X-Amz-Signature=95f3347a76264b33da07244542033b74a26dbc816f6935a2a3bd580111aba2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

