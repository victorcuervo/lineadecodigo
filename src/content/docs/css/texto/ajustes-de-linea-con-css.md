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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDEU2KFW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3tPfn6mI0TcE%2Bnw8I0MUfXYxMzhkVXhGVI2Dd8AdVbQIhAM5Bpf15sSCa4XBAZuO9FdSv940Zdn%2F2ZDQlpyh5cwAAKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaD%2BWri3hO9imFiKsq3APTo6joZydq5ONmdIA8UmjI7O4AVudwsZKuBV%2BGSuo94zG5uT7KcGuYw2zH6z5qdY5lru%2B4YKeYWwztymkNUCLObY%2FPHnY2am19yRi1z4CUQUCoZZFDEQYpG44VMX8Rj72EmHuqWhMgJe53BnID3ybD1GMEiE6G6ClGk0kLCipIgR8YvkDA06w%2B293syYYp1wA7jjrGFO6sTb%2BALpp7rQ%2F0TZ%2BEu4y53OvhQH20jJSkj8vkpV0oDyyqufYBbfYl7K%2BTyH69%2BWwgEmi%2Fv1e1%2B%2BxuefEC2L%2FKv1Smt6obBvwYGBwqaDxAhqeb3%2FlpPWqsOdkSbEY83l1H0kald4rzWSSLdUD6Wf9%2FB5hb%2FEtzjGIj0O2p%2FvYKB0EcujwGduTDoXb4gPwWoAqOVD02XGMdis29sufueaADhHkqwNEvoA2q%2FHEaZea28%2BXqHaPWrVEQ8K9uVkK9ku0bcHxtVAd2WIeZhrPdgjVCrK5Rw8k4U076uH6TygcB2bI6mtss4MkOLjPEZABUtiXwsSQZJ6eR8DvmIepbA8ptF3QEv6iDA368YdsD11MWRADG7ESzzgtKvx0snkP4TkdR18S8M8jM5cWywosJozdjG4NmgeJuMH4EWyYaL3cZoPzj%2FSD7CTC5iozKBjqkASfzRrjrVlNDUudOaAxqhzSeOzmaP2Wq9pKd8xAwpu3ZQ5GxC1PATmzKkQ8%2F79HGnSt4HAiteWPlNoO5JLP1lMz9%2BQgzLy6l3B4DoNBv1P%2FAuP67u4xKDYJ%2BAmHFMVB80yI%2FqbjjgNrzH1jwkrUBqdiM6d%2Ft%2Fh6Xx0xpokU%2BQwN0arPKgtHV1zwO5Zd5Gj71TXV2VJSq759QM7BK4XduKN46tLeQ&X-Amz-Signature=df8f6864751744e8e7b8ff5eb41d90042fe4356830c99be288ff1f2981409e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDEU2KFW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3tPfn6mI0TcE%2Bnw8I0MUfXYxMzhkVXhGVI2Dd8AdVbQIhAM5Bpf15sSCa4XBAZuO9FdSv940Zdn%2F2ZDQlpyh5cwAAKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaD%2BWri3hO9imFiKsq3APTo6joZydq5ONmdIA8UmjI7O4AVudwsZKuBV%2BGSuo94zG5uT7KcGuYw2zH6z5qdY5lru%2B4YKeYWwztymkNUCLObY%2FPHnY2am19yRi1z4CUQUCoZZFDEQYpG44VMX8Rj72EmHuqWhMgJe53BnID3ybD1GMEiE6G6ClGk0kLCipIgR8YvkDA06w%2B293syYYp1wA7jjrGFO6sTb%2BALpp7rQ%2F0TZ%2BEu4y53OvhQH20jJSkj8vkpV0oDyyqufYBbfYl7K%2BTyH69%2BWwgEmi%2Fv1e1%2B%2BxuefEC2L%2FKv1Smt6obBvwYGBwqaDxAhqeb3%2FlpPWqsOdkSbEY83l1H0kald4rzWSSLdUD6Wf9%2FB5hb%2FEtzjGIj0O2p%2FvYKB0EcujwGduTDoXb4gPwWoAqOVD02XGMdis29sufueaADhHkqwNEvoA2q%2FHEaZea28%2BXqHaPWrVEQ8K9uVkK9ku0bcHxtVAd2WIeZhrPdgjVCrK5Rw8k4U076uH6TygcB2bI6mtss4MkOLjPEZABUtiXwsSQZJ6eR8DvmIepbA8ptF3QEv6iDA368YdsD11MWRADG7ESzzgtKvx0snkP4TkdR18S8M8jM5cWywosJozdjG4NmgeJuMH4EWyYaL3cZoPzj%2FSD7CTC5iozKBjqkASfzRrjrVlNDUudOaAxqhzSeOzmaP2Wq9pKd8xAwpu3ZQ5GxC1PATmzKkQ8%2F79HGnSt4HAiteWPlNoO5JLP1lMz9%2BQgzLy6l3B4DoNBv1P%2FAuP67u4xKDYJ%2BAmHFMVB80yI%2FqbjjgNrzH1jwkrUBqdiM6d%2Ft%2Fh6Xx0xpokU%2BQwN0arPKgtHV1zwO5Zd5Gj71TXV2VJSq759QM7BK4XduKN46tLeQ&X-Amz-Signature=1f1021c0b41b9d77143510222c01dfb2bdc87f4bff2f17567221acd973bfd841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

