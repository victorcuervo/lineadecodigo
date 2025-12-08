---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQITWS7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGV3Z%2BO0iY4OtlJYcDh7QK%2FvPrFUt2MYoEsGFstMqfgwIgGeGTioq9sSmak2xjHZ3iC9mikNplCggbH66ddCQdnZ4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgZkRXc5iPqPuYgZSrcAxVzSE84VyaMo60VG4s3gB4viu0xKgw3yziPi1uj5%2BmTU2nS1qUON%2FVG32zsAYEYd5KhX0MTFDCZLqisLJfwtoOPELDP23LsDU9zRk1xPScEcgQjjkVZmzKn2Y9gG0DnhVEnTLANIedOJsxsnIvqdn7cpB0n5K6PQLUXwAeumHfelms00DmTDFtZELKASR4ZzpG%2F6n3zxHlTGJ8XxXUlU5gQx02CNVy7qQ1w04YasHiAX7VCMGJeRIuPuVyf%2BmC0iVNLyF6jxmAgveIyBooeg%2B2jQm0iRgB2Ql0b1H4phxLQCZADdD%2FA5g%2BYEVTHmXaQAMv7zSSHTCTVBYpnkbtNC%2FWIwcfXTPbU7Ws8nOKNIoB%2FD%2F7jiJUgq9YQJ1OgnZMb2YrwxumoFPutIhsbKDjYGtOb9vB2kybBGzuvcplMp1Ag0uBISRFlIYiY6ITpQhaDm6dpD1JxgX2THVwm6IyTWKx3%2FTe91TAEMXKOUBljf5MRAt%2B48d0kboWR09ZSLB%2BMV1wJAm66XOGkjWY6V5LQcKgGaTY5krR9vKhfaZ80MaQsxd60GgOSlc%2FySRQAPREau7ld6AP0CT4KeFigPutdEK6PcIQVSDk7PlutDYYoZ8nDcFgE7iZPFK6SkMueMKru2MkGOqUB%2FfsAPcd2xwwKP0SqWsEnYjcdZq74xRWXiypEPo6sPSdRCH75K0j%2BTJfazaLmyqZjB0D8s7t%2FuZ07rfZSOjtyReK3HiC86J2dd1hJouPUPKEjeLcqLQRpDMXmMXRCDnJxBSFNYqTxaWuy5N6LhvvfLl4KyDdiPaLxTgKAUr%2BhqUD8Lt6vpHxUErOfr2fnxrSm8WZfLrNhBMxoXHdQmEyndKjXu8Lr&X-Amz-Signature=f0aabad84e8edcf0bf98263c4a2d41563f0f05c548dc4268bd4b03f1b7a380fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UQITWS7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGV3Z%2BO0iY4OtlJYcDh7QK%2FvPrFUt2MYoEsGFstMqfgwIgGeGTioq9sSmak2xjHZ3iC9mikNplCggbH66ddCQdnZ4qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFgZkRXc5iPqPuYgZSrcAxVzSE84VyaMo60VG4s3gB4viu0xKgw3yziPi1uj5%2BmTU2nS1qUON%2FVG32zsAYEYd5KhX0MTFDCZLqisLJfwtoOPELDP23LsDU9zRk1xPScEcgQjjkVZmzKn2Y9gG0DnhVEnTLANIedOJsxsnIvqdn7cpB0n5K6PQLUXwAeumHfelms00DmTDFtZELKASR4ZzpG%2F6n3zxHlTGJ8XxXUlU5gQx02CNVy7qQ1w04YasHiAX7VCMGJeRIuPuVyf%2BmC0iVNLyF6jxmAgveIyBooeg%2B2jQm0iRgB2Ql0b1H4phxLQCZADdD%2FA5g%2BYEVTHmXaQAMv7zSSHTCTVBYpnkbtNC%2FWIwcfXTPbU7Ws8nOKNIoB%2FD%2F7jiJUgq9YQJ1OgnZMb2YrwxumoFPutIhsbKDjYGtOb9vB2kybBGzuvcplMp1Ag0uBISRFlIYiY6ITpQhaDm6dpD1JxgX2THVwm6IyTWKx3%2FTe91TAEMXKOUBljf5MRAt%2B48d0kboWR09ZSLB%2BMV1wJAm66XOGkjWY6V5LQcKgGaTY5krR9vKhfaZ80MaQsxd60GgOSlc%2FySRQAPREau7ld6AP0CT4KeFigPutdEK6PcIQVSDk7PlutDYYoZ8nDcFgE7iZPFK6SkMueMKru2MkGOqUB%2FfsAPcd2xwwKP0SqWsEnYjcdZq74xRWXiypEPo6sPSdRCH75K0j%2BTJfazaLmyqZjB0D8s7t%2FuZ07rfZSOjtyReK3HiC86J2dd1hJouPUPKEjeLcqLQRpDMXmMXRCDnJxBSFNYqTxaWuy5N6LhvvfLl4KyDdiPaLxTgKAUr%2BhqUD8Lt6vpHxUErOfr2fnxrSm8WZfLrNhBMxoXHdQmEyndKjXu8Lr&X-Amz-Signature=dd83f9a38781b38155763456613f6feabad0dd0749252f40eafa2fbee45fde41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

