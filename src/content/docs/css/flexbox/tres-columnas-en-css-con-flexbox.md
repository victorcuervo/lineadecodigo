---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337ZCYJS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIUXfb18WHde73en%2BF8CTCftLSx77FXGVUW789pS496AiEAz3daMyEIQmUZDECN4biKxGyF87TvXn6CGEUpVj70AlUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsoac4rxCyIclTCzSrcA2SWImrZk1N4xbem3in3jIzroD21lTOBmOqRC1eHQKVoYgTrKBZY0F0Wx2nfeGSczmdUQPeRAE8fBWMHlqmKctYiwPGpUTPBep7hR4Wfeol9bGZtIdwI506Ru9V9Q5SlkQbMvgSOFwZOSFYn4BgM96ELuY4ndW3Y3%2FODvKgBLipQhgqVST006yQL2ijoN8tOt2mlHFqKabUbbgqEVBV4KFfSD5M9eCNk9CCdFvy7B2MitIZbqosIjLclWL60MnUK5E7%2BrJURIbq5d5rtnd9z1RR0zmO%2BZeDX73wgoauM0K104gpuiA9oD7TEFg8W6FBtlXsGo83QIIpKRjmy6mTIL3%2Fxc%2FKCSQYq6Sa6a1O2oqWXf6N5bPRgzwmk5UiUt9pAMYWryJuEaSmPEJKyaYZ4%2B6sdBaJTEXyF0ezi4XysYPfSt09zepkYRFwPtADxcwtej3Hx1pDREl7w3GSkuz8kB8jdkJOyBq8fQCKehUaEElxjt2%2F7GK6F2dHPF8dvCbUsTQwLpTbY4ncCw7ZGfZWmeLbw9sMqmqsi1w896GJEfQfX3JnDDoq3Em64jq4%2FSypwuFQVHO0qDfxxu5ygc6WsS%2BFGgrsCnSI%2BorknmmlbOmNdsudYaUu4IaT6w9TFMOvG18kGOqUB5%2BR21QFiPpCat5MdUK%2FiGj7cX4zAo4PtlUUGPiCXBYpwI1WLKUdqFuDx591RH4b49lyN2KahH60H8MlsZfoyRibo1rObnIZfeyn6DK07BmObzNFif9pVb19vqXOMD1MJLrHrIuaZoPm4u7TqGKtgALoUIN8VoXbNNTtdb4nuXphmG8n9n1gDinSLwnK%2F293ojsyx1fb4xlPWYuwOg9Fid5%2BdrX3%2B&X-Amz-Signature=c40ce1026dd7f11e8c926938210f657f89ba6dcdf4085a2f31eca12078692f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466337ZCYJS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIUXfb18WHde73en%2BF8CTCftLSx77FXGVUW789pS496AiEAz3daMyEIQmUZDECN4biKxGyF87TvXn6CGEUpVj70AlUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNsoac4rxCyIclTCzSrcA2SWImrZk1N4xbem3in3jIzroD21lTOBmOqRC1eHQKVoYgTrKBZY0F0Wx2nfeGSczmdUQPeRAE8fBWMHlqmKctYiwPGpUTPBep7hR4Wfeol9bGZtIdwI506Ru9V9Q5SlkQbMvgSOFwZOSFYn4BgM96ELuY4ndW3Y3%2FODvKgBLipQhgqVST006yQL2ijoN8tOt2mlHFqKabUbbgqEVBV4KFfSD5M9eCNk9CCdFvy7B2MitIZbqosIjLclWL60MnUK5E7%2BrJURIbq5d5rtnd9z1RR0zmO%2BZeDX73wgoauM0K104gpuiA9oD7TEFg8W6FBtlXsGo83QIIpKRjmy6mTIL3%2Fxc%2FKCSQYq6Sa6a1O2oqWXf6N5bPRgzwmk5UiUt9pAMYWryJuEaSmPEJKyaYZ4%2B6sdBaJTEXyF0ezi4XysYPfSt09zepkYRFwPtADxcwtej3Hx1pDREl7w3GSkuz8kB8jdkJOyBq8fQCKehUaEElxjt2%2F7GK6F2dHPF8dvCbUsTQwLpTbY4ncCw7ZGfZWmeLbw9sMqmqsi1w896GJEfQfX3JnDDoq3Em64jq4%2FSypwuFQVHO0qDfxxu5ygc6WsS%2BFGgrsCnSI%2BorknmmlbOmNdsudYaUu4IaT6w9TFMOvG18kGOqUB5%2BR21QFiPpCat5MdUK%2FiGj7cX4zAo4PtlUUGPiCXBYpwI1WLKUdqFuDx591RH4b49lyN2KahH60H8MlsZfoyRibo1rObnIZfeyn6DK07BmObzNFif9pVb19vqXOMD1MJLrHrIuaZoPm4u7TqGKtgALoUIN8VoXbNNTtdb4nuXphmG8n9n1gDinSLwnK%2F293ojsyx1fb4xlPWYuwOg9Fid5%2BdrX3%2B&X-Amz-Signature=e2534439b152840cfea9b326d44c02ae854c648a53bf7b1a3274ce85dbcccf03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

