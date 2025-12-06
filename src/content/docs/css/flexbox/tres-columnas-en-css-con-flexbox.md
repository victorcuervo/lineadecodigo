---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W44AYEF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBno6L8lUSSlB3S%2BQSfm4Xe6zU6GWC4S0B6V%2FFcdD66AiEA4gqZEggtc3dLq1XIusYgWFjn5EGfycEHJaRT6jAUDJEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAB3AxyA2n2nEGNXRyrcA7J3ypXwwpcVinSBunia4TaVwDEqrAktyRNEXKsUX%2BzAH8wxH1OcpzYQiqQrACd5%2FhsCL%2B9Wh%2BAr2JMaSkz%2BeXoirvUKzEap%2Ftl60wD7w5EpGE2vlH%2Bb3pdZh1N0%2FKXCTvVrDJEtgocZV5m36KQk%2FwRuIIHAMEDFwMYURpRufv0tuDwYCL8dPgXlDT01eVjrCr0s%2FC0gRAMb8HikGOGfvfix4PI5EgWeTdIt6bPqz6b%2BU1SndDBqpBVKsOXyUQO%2FaV%2F0LCL0lqLcxaAMu0b9AZADeTXDUKwUSx8yAJuouoWk6D7A8xDL4LwX4RNy7vnnk1DZ3dzJazAclvlnYn8NAk6ADlLSnm%2B0lzYifOhCLmsx6oU8I%2BzRkSQQy11NkyKgEjOPPDeUPwtrTHS6p0vxF%2FOrBcOkd8oxEmUN0Pie1Sms5w5vXtdnMHRsqRWIvMbaG4K5SNH1JP85V9sSl7fWgVpFU8s%2FzVL6ZbJ%2BZNswNPVoQKJvEdSlVgyWwGTjD0nPBjnvznFrLDy81OEpDU%2Fi2Uc%2FVKC4mZmzaIaqxz6KXATaNW%2BVPaQ9lmARDI6kZDPfpTvVbdi6Ku9AWTBEtyUj%2BtwfeOIZfmMGfRA%2FaiHpAipy6MP%2BtFtXkcmgwxW%2BMPHM0ckGOqUBxtrkYzf1nz2%2BuiiXnmzf6KBiCc%2FZrZTckMjxd5mQr4OdjWVRQ50EeIsoGfdfDEGs7seyOqMvO6WrE8H54KeV583JzDiKqIalCe%2FBHjGFqK%2FEAPPNszHPTkDB4Ap1imVDIyJ7MLosaOP62U01Hqs9JXOJAVc%2FxKCHZ%2BKkLqukC%2FykwKHtvOhZ3i5MGXNsHRMqIVI98ZOkHa1ZrRZfSv0ylb89KyoY&X-Amz-Signature=a506355c924db8ad055113f5cbbb27efc2401d5f1871388b3ffcbf554d9871cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W44AYEF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBno6L8lUSSlB3S%2BQSfm4Xe6zU6GWC4S0B6V%2FFcdD66AiEA4gqZEggtc3dLq1XIusYgWFjn5EGfycEHJaRT6jAUDJEq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAB3AxyA2n2nEGNXRyrcA7J3ypXwwpcVinSBunia4TaVwDEqrAktyRNEXKsUX%2BzAH8wxH1OcpzYQiqQrACd5%2FhsCL%2B9Wh%2BAr2JMaSkz%2BeXoirvUKzEap%2Ftl60wD7w5EpGE2vlH%2Bb3pdZh1N0%2FKXCTvVrDJEtgocZV5m36KQk%2FwRuIIHAMEDFwMYURpRufv0tuDwYCL8dPgXlDT01eVjrCr0s%2FC0gRAMb8HikGOGfvfix4PI5EgWeTdIt6bPqz6b%2BU1SndDBqpBVKsOXyUQO%2FaV%2F0LCL0lqLcxaAMu0b9AZADeTXDUKwUSx8yAJuouoWk6D7A8xDL4LwX4RNy7vnnk1DZ3dzJazAclvlnYn8NAk6ADlLSnm%2B0lzYifOhCLmsx6oU8I%2BzRkSQQy11NkyKgEjOPPDeUPwtrTHS6p0vxF%2FOrBcOkd8oxEmUN0Pie1Sms5w5vXtdnMHRsqRWIvMbaG4K5SNH1JP85V9sSl7fWgVpFU8s%2FzVL6ZbJ%2BZNswNPVoQKJvEdSlVgyWwGTjD0nPBjnvznFrLDy81OEpDU%2Fi2Uc%2FVKC4mZmzaIaqxz6KXATaNW%2BVPaQ9lmARDI6kZDPfpTvVbdi6Ku9AWTBEtyUj%2BtwfeOIZfmMGfRA%2FaiHpAipy6MP%2BtFtXkcmgwxW%2BMPHM0ckGOqUBxtrkYzf1nz2%2BuiiXnmzf6KBiCc%2FZrZTckMjxd5mQr4OdjWVRQ50EeIsoGfdfDEGs7seyOqMvO6WrE8H54KeV583JzDiKqIalCe%2FBHjGFqK%2FEAPPNszHPTkDB4Ap1imVDIyJ7MLosaOP62U01Hqs9JXOJAVc%2FxKCHZ%2BKkLqukC%2FykwKHtvOhZ3i5MGXNsHRMqIVI98ZOkHa1ZrRZfSv0ylb89KyoY&X-Amz-Signature=e49f535d2bb78e8d6fa003c88331a38c8c99eb5590742cc2ad70770347169d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

