---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQZAH2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVgLgjsU8Mj3ch9moEQFRzko%2BPPmH0UGjYxMmAUyIX8AiA9GmBzqR4Qp%2BwbZF9XgiV%2F4rH%2FIAjzk4oRVdAiwHTiCSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9y84XoFmeXdi7A4KtwDvo3FKQ9M8Li2MmZaPp9BmY7DcbwvkoRV7Ts1poAkR4DIckRoctVyc6gXYQ9VSMaSRMXezsa8yZZIvMedUapdG5RPnaqMJriqslYIuQJHUvTIG3QWI1odAl5iPea3LRQAZZHwCZGlMKVQczmx8YxPg4aUf8ubbvWs5FsiRrLk5eiq6CFTCZzJ2BGXN79ND%2FWnfSTw72F8H2IRXv9xeMcHJfZqj0O0%2FdhGVGXYcKRyN2RFPzZ6%2FrN5XlXFSfU4n%2B0AvFD3BLw%2FaOvp44i8GAifOfJCdbID%2Ftfnf%2BDWrpVG9jHPyEqOCSXv1vwecz9vWf0ZNgjzM8LNZRMQk3nRFDSz4vLOjRFioiByrj56f50HZb2ktYfZpxeOq5LG53L1eyI2hOSCo%2BCI73Mw06syW8BHoHQmms%2FqeBaJ9Mju6yOS4DzZhZgwXKu15JcVnB2sQJ8r7rtX%2Fj%2BWJ%2BsrdbIWH2aofLtW4i55VGakpn6eN5yOgJbocEPPx%2BNZEOqF%2F6M2YXmotcpDvz3Lgjx%2Fdpik7pTanI%2BXMxzKn7xsVf3Tj%2FfyVmqONcn7xPr1rSfcl5EkfxWyL8%2BjKeKrsZ9OgzBsvlj12GGvX9n%2F8L7BPDWmoCxflb7yaST6YTzvV8AFM4gwzZ6LygY6pgE7na6RFYOE3YbLpN%2FANkGVR0mS9jT3%2BuZJVoohzGJikscEDEX3Ay9MqmDLvxMEKW9AQFezDorrkiSvHLEMgFUTu%2FoNUVQJeG3yEhKpseO%2BD%2FLMdm6bRQXM7VJ063H1gC7R0g1Vg8mnOYSBf7Qkub50JzDdGb%2B6FB9uzl3y4ABCviv6McSbs5sgnO%2Fgnn%2FNdK04KaPT71LlMh90wtGU5u3D7sF%2FYPUi&X-Amz-Signature=1dc2a38c259a7611252a94c65e9b0ed0b203feb4eeb1ebe50fcff00f24a2d656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQZAH2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVgLgjsU8Mj3ch9moEQFRzko%2BPPmH0UGjYxMmAUyIX8AiA9GmBzqR4Qp%2BwbZF9XgiV%2F4rH%2FIAjzk4oRVdAiwHTiCSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9y84XoFmeXdi7A4KtwDvo3FKQ9M8Li2MmZaPp9BmY7DcbwvkoRV7Ts1poAkR4DIckRoctVyc6gXYQ9VSMaSRMXezsa8yZZIvMedUapdG5RPnaqMJriqslYIuQJHUvTIG3QWI1odAl5iPea3LRQAZZHwCZGlMKVQczmx8YxPg4aUf8ubbvWs5FsiRrLk5eiq6CFTCZzJ2BGXN79ND%2FWnfSTw72F8H2IRXv9xeMcHJfZqj0O0%2FdhGVGXYcKRyN2RFPzZ6%2FrN5XlXFSfU4n%2B0AvFD3BLw%2FaOvp44i8GAifOfJCdbID%2Ftfnf%2BDWrpVG9jHPyEqOCSXv1vwecz9vWf0ZNgjzM8LNZRMQk3nRFDSz4vLOjRFioiByrj56f50HZb2ktYfZpxeOq5LG53L1eyI2hOSCo%2BCI73Mw06syW8BHoHQmms%2FqeBaJ9Mju6yOS4DzZhZgwXKu15JcVnB2sQJ8r7rtX%2Fj%2BWJ%2BsrdbIWH2aofLtW4i55VGakpn6eN5yOgJbocEPPx%2BNZEOqF%2F6M2YXmotcpDvz3Lgjx%2Fdpik7pTanI%2BXMxzKn7xsVf3Tj%2FfyVmqONcn7xPr1rSfcl5EkfxWyL8%2BjKeKrsZ9OgzBsvlj12GGvX9n%2F8L7BPDWmoCxflb7yaST6YTzvV8AFM4gwzZ6LygY6pgE7na6RFYOE3YbLpN%2FANkGVR0mS9jT3%2BuZJVoohzGJikscEDEX3Ay9MqmDLvxMEKW9AQFezDorrkiSvHLEMgFUTu%2FoNUVQJeG3yEhKpseO%2BD%2FLMdm6bRQXM7VJ063H1gC7R0g1Vg8mnOYSBf7Qkub50JzDdGb%2B6FB9uzl3y4ABCviv6McSbs5sgnO%2Fgnn%2FNdK04KaPT71LlMh90wtGU5u3D7sF%2FYPUi&X-Amz-Signature=e737ff6f4c4120e7743557f719518a97f2d112142278d2f243ca8a9c4e5d5a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

