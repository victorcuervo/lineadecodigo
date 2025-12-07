---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHWK6C53%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeqI%2FnAVOa80fOHNg44NMwcUqqVkRYvqIINOvV1otlTAiBpMUYhhE2UzYfcslM39AFuRCO6Cs1NrwpAp09MKpnWrSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxVe2Por%2B%2FJ%2B4foj%2FKtwDcFFkal4tgX%2FTlAzq5rFEa3MR5qrYv%2BxOv9HSw%2FAB8K1TcQdlJfSqiyiaXl7JdmeLIMHBd4rBYnez8l9en7pVOIGCAsOG64sJRh3YdXaHETOSYPgqY7sxb%2FxUmH6JjOBKaJASdzWkRQ8lX0MMgdGD%2BTpmDaa2E48WrppBdoe%2BZhYreuh5eNVBIocEgr1SLMQq1CFEziDu1B6uqMiowzLjNkYU5SuiG0%2FNNfRwL2O3tGLmzTNEIzyH1s0tmxzDfwmd7gV7TLr0vFIO3GFszVH5s5UenMJsQTea1TnWasVgiYlKja4%2F6vod3vAfPH%2BTyfAITiWJKxC6bh2KBihnKlkUy4X2cVECKy0yhjxopLIUvqkmfewr3D2Dqw0%2Fai1C6z6U3B%2Ba%2FVyMWr%2BgYzL7Tk7PpEdE4CqTnscL34OWxIADtnXLKEGuGsUCpvS4xxPzzapjlyNiya4yU%2FM6WkdyI9ETIndbLB3pjTesF1TmCVf1sT23I9MppJj7r51bEpp1QKRtkJuWsXyCvGv5yLTv8TA6WZaDKhalzMWRXRnEGHGaM2Pu4w%2BwvsinaRzJOe1gcLIXh4xgPpdaZj991FhzPdCJGOK31DxgNCb4N257BEqxeo7smIgbagrD6oV0e40w3prVyQY6pgEMBKt7eeS0BuQKgz92BVQqWKTpHdAVTo0Uo6vh0mSytDuTelslV5I4dFdDHYjD9F3zTDJHzKwt8I0ShzP3vw6TFCMj1VoJFdlPPfR103vm%2F0%2BAkGHsgqAcWqDayr%2FRD9kblQTiQWvTdoZ2pcf2GhwRqwl112oStrFI7bgI1M1O2XpJor6WLjBB2k3WuD1eIj93N91dFBGqF2nN4v6qn6C9%2BQAInV2h&X-Amz-Signature=da8495f18aa98fb877539f6a09796ba04a25ddc8339bece8d8e3c81359dbe83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHWK6C53%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFeqI%2FnAVOa80fOHNg44NMwcUqqVkRYvqIINOvV1otlTAiBpMUYhhE2UzYfcslM39AFuRCO6Cs1NrwpAp09MKpnWrSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxVe2Por%2B%2FJ%2B4foj%2FKtwDcFFkal4tgX%2FTlAzq5rFEa3MR5qrYv%2BxOv9HSw%2FAB8K1TcQdlJfSqiyiaXl7JdmeLIMHBd4rBYnez8l9en7pVOIGCAsOG64sJRh3YdXaHETOSYPgqY7sxb%2FxUmH6JjOBKaJASdzWkRQ8lX0MMgdGD%2BTpmDaa2E48WrppBdoe%2BZhYreuh5eNVBIocEgr1SLMQq1CFEziDu1B6uqMiowzLjNkYU5SuiG0%2FNNfRwL2O3tGLmzTNEIzyH1s0tmxzDfwmd7gV7TLr0vFIO3GFszVH5s5UenMJsQTea1TnWasVgiYlKja4%2F6vod3vAfPH%2BTyfAITiWJKxC6bh2KBihnKlkUy4X2cVECKy0yhjxopLIUvqkmfewr3D2Dqw0%2Fai1C6z6U3B%2Ba%2FVyMWr%2BgYzL7Tk7PpEdE4CqTnscL34OWxIADtnXLKEGuGsUCpvS4xxPzzapjlyNiya4yU%2FM6WkdyI9ETIndbLB3pjTesF1TmCVf1sT23I9MppJj7r51bEpp1QKRtkJuWsXyCvGv5yLTv8TA6WZaDKhalzMWRXRnEGHGaM2Pu4w%2BwvsinaRzJOe1gcLIXh4xgPpdaZj991FhzPdCJGOK31DxgNCb4N257BEqxeo7smIgbagrD6oV0e40w3prVyQY6pgEMBKt7eeS0BuQKgz92BVQqWKTpHdAVTo0Uo6vh0mSytDuTelslV5I4dFdDHYjD9F3zTDJHzKwt8I0ShzP3vw6TFCMj1VoJFdlPPfR103vm%2F0%2BAkGHsgqAcWqDayr%2FRD9kblQTiQWvTdoZ2pcf2GhwRqwl112oStrFI7bgI1M1O2XpJor6WLjBB2k3WuD1eIj93N91dFBGqF2nN4v6qn6C9%2BQAInV2h&X-Amz-Signature=32923e6c570ec9c96a3153f77ee697d0ce7513411a6a82db941b2da29d5827f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

