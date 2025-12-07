---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZCDG2Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB98jp4fsIrako8wCXs8jjziPmgtaJv0iaQnWvetHkldAiEAkTnhhKL05B%2FbqDqPU1U6JiAGWAfo3KoVpt%2FZkxS1U0oqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtGqkm04EDnq8T0MSrcA%2FQsxdMah2J%2BdVzmBEvVSn0tRWSGmYEkExSkyQGWmVmG6Lor6iKG3DlCiD7iCsA0RAMbv70VPgpVpdHsE4HSgTgHeAGjrN6RaZWoJkwCTyT4VV8EJdgs8nlg92jfsaYm%2BwVB8gIaCp14LEUpG05ZlC2ZSBeq84wPnRTIg%2FU79D3TMOquaejnAYhc7kFBNOqBpVrBl15ZDn0FyzUFAD%2BAjFvdquycSx4pcWXTTXaC06CwsDvn5ICuhGwwyFiBUnS%2FheY9%2FNzVXwHz0xU%2B7MEtKfWO0Jk1F%2B6yym07JPfllkIp4%2BQ05mWXPuEBzFq2X8LvzL5xzIN0bOMQ%2B0Bny%2FQSnbAW9TxOA6FsPXZe5y43NGkxTNuSp4g3Y1MYGhvxsAck7JegMS2pNIE%2B6NCHAwIbceTMkIU4qM0fQd3JK3RY4WU46fnQVG6sH%2FAqPzloRX8EsANZ9nZzXwR%2BGNyVjzLmXusxhwUPWegbKPhU%2B%2BOxsFLD0EBry0BAq61v0oZ80czFpjIw8LFes443djeTBgipdT5PFoNSEfc75ipESNcgkcXK%2BuNp8fJooI5JICWA1RIy4bS85Bpfdsjd%2BTC4MXxaL4EolwLBrqfdX9GE2j06P1FsbiITNhWbsL2sAjb9MOzH18kGOqUBcUSYQKqLcGHvr%2BAnM78z6jw2%2FZEF%2BnrvkiF%2Fe2k5N3yhNyMD9HtfVshpZnLm5lfSWZsVieMD8LXIoXrYhXY7przbUHhh%2F3VOpOT4zHmrGmGhNvwYX3Uapt2AYMjXWNvYm44XGecJJbukuckvOpnoz2N9XXviR18c2gS9VXm76JvWgQ8z64YtFUX3C7EMasl2KjEir315jpUApXV9IO45wNTs5uT0&X-Amz-Signature=163f3249bdc2621d0b34eebc953a47edbcd1aa6e70d5967e9ebe6d096bb9c858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSZCDG2Q%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB98jp4fsIrako8wCXs8jjziPmgtaJv0iaQnWvetHkldAiEAkTnhhKL05B%2FbqDqPU1U6JiAGWAfo3KoVpt%2FZkxS1U0oqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtGqkm04EDnq8T0MSrcA%2FQsxdMah2J%2BdVzmBEvVSn0tRWSGmYEkExSkyQGWmVmG6Lor6iKG3DlCiD7iCsA0RAMbv70VPgpVpdHsE4HSgTgHeAGjrN6RaZWoJkwCTyT4VV8EJdgs8nlg92jfsaYm%2BwVB8gIaCp14LEUpG05ZlC2ZSBeq84wPnRTIg%2FU79D3TMOquaejnAYhc7kFBNOqBpVrBl15ZDn0FyzUFAD%2BAjFvdquycSx4pcWXTTXaC06CwsDvn5ICuhGwwyFiBUnS%2FheY9%2FNzVXwHz0xU%2B7MEtKfWO0Jk1F%2B6yym07JPfllkIp4%2BQ05mWXPuEBzFq2X8LvzL5xzIN0bOMQ%2B0Bny%2FQSnbAW9TxOA6FsPXZe5y43NGkxTNuSp4g3Y1MYGhvxsAck7JegMS2pNIE%2B6NCHAwIbceTMkIU4qM0fQd3JK3RY4WU46fnQVG6sH%2FAqPzloRX8EsANZ9nZzXwR%2BGNyVjzLmXusxhwUPWegbKPhU%2B%2BOxsFLD0EBry0BAq61v0oZ80czFpjIw8LFes443djeTBgipdT5PFoNSEfc75ipESNcgkcXK%2BuNp8fJooI5JICWA1RIy4bS85Bpfdsjd%2BTC4MXxaL4EolwLBrqfdX9GE2j06P1FsbiITNhWbsL2sAjb9MOzH18kGOqUBcUSYQKqLcGHvr%2BAnM78z6jw2%2FZEF%2BnrvkiF%2Fe2k5N3yhNyMD9HtfVshpZnLm5lfSWZsVieMD8LXIoXrYhXY7przbUHhh%2F3VOpOT4zHmrGmGhNvwYX3Uapt2AYMjXWNvYm44XGecJJbukuckvOpnoz2N9XXviR18c2gS9VXm76JvWgQ8z64YtFUX3C7EMasl2KjEir315jpUApXV9IO45wNTs5uT0&X-Amz-Signature=af5ea362ac41ea271b6788115788596776e24a1b7f6aa2abcfb2a75177cb0bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

