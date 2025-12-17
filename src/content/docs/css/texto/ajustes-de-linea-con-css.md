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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJHMC2UC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVwnuRh6yznY0%2BzXCCpyzWzSCFCzjNrQMJOZA%2B6T3xPAIhAM4TpF7gjAcBsi%2BmD96uOVDpzv26CX99tFOUwUZwkCUSKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz51QP5j1Ys4HukYgq3ANPteBpuH6zJcxWi85yhVbRQQ6VBuU2sNFYZox1RvssdoJFFjnfh2hlbLwxBFRB2GTD9SbHjBAXZl3cvU8B9Z8taQhMGt5E0gpYLRghBbR5FB%2BfkVDGQXOvWcU3zmRqTYKKJEZTKIP5OluWoIfsE3Cu%2BMnDgJVmE5BTo8Z8Qrq5oUxlIeCKo9KqCZCJ1S3Jmoa41BsQAusbj5NaI2mbpDrRyCcmom%2BA8j0lKL602b4SCp15mVwQZyhjX0wMMOgFEJTPqPewVcgbkuhi7rudoNfPdAiKyycET%2BVL9smB63Q4UIniW9aPFOPewInXeRk6WdTRr%2FgOLEON5VyqzFSnu2W5UGzs4qnHE9AlPTsMoauu54CX5VCVj4ekDAmIUY3eW7JRRqwpzwGaHq9Dsfi%2FGFTf3%2Ftj8wKvx8LSh9iPe7n%2F2QM6BdSLz0XCrolOzBp1oR12Qk2qiR%2BIqj2MsSG30ZEwKKsCIk7qTsopN0bvESKMW%2Fx8FItZnEZd1KYwtVBi37oxwyyPQG6Se8dvsFfss0ZfDjS4%2BZe2IFgnQ2CKHl9zAI6Bxa%2BdGAUkY8v91hJ3Alo0DqnLmXm7sLqhVRzXsTkeoGE1Kh1YnU4uA7JA6WoA9w0RHjwf63YGP%2FBy7zCXrozKBjqkASpCchVGKg%2BlMbaLPmqopXAeL%2BB0RxBXXyyS4ljgoH315EXwhp1H77r1mqXPZvSOEsqzIrttuBPzjvc8XCAmmhCzKnLWSgVRyc69FOYuOLr1ov4BXfbgXQW3wgG8uhsZW1EibI9h3BnOkP2P3qNsqcBZMtDQy4%2F8Wsc%2Bgg4Jgl0XRhvwnq9vdGVcC18QHU5G45aD%2Fm%2BUCfHvA3eWl8g4wkY5K8dF&X-Amz-Signature=5c0c4016349f1b58be0af9858b4a2f7c005ac1f2f029470de1f7cdf787890a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJHMC2UC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVwnuRh6yznY0%2BzXCCpyzWzSCFCzjNrQMJOZA%2B6T3xPAIhAM4TpF7gjAcBsi%2BmD96uOVDpzv26CX99tFOUwUZwkCUSKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz51QP5j1Ys4HukYgq3ANPteBpuH6zJcxWi85yhVbRQQ6VBuU2sNFYZox1RvssdoJFFjnfh2hlbLwxBFRB2GTD9SbHjBAXZl3cvU8B9Z8taQhMGt5E0gpYLRghBbR5FB%2BfkVDGQXOvWcU3zmRqTYKKJEZTKIP5OluWoIfsE3Cu%2BMnDgJVmE5BTo8Z8Qrq5oUxlIeCKo9KqCZCJ1S3Jmoa41BsQAusbj5NaI2mbpDrRyCcmom%2BA8j0lKL602b4SCp15mVwQZyhjX0wMMOgFEJTPqPewVcgbkuhi7rudoNfPdAiKyycET%2BVL9smB63Q4UIniW9aPFOPewInXeRk6WdTRr%2FgOLEON5VyqzFSnu2W5UGzs4qnHE9AlPTsMoauu54CX5VCVj4ekDAmIUY3eW7JRRqwpzwGaHq9Dsfi%2FGFTf3%2Ftj8wKvx8LSh9iPe7n%2F2QM6BdSLz0XCrolOzBp1oR12Qk2qiR%2BIqj2MsSG30ZEwKKsCIk7qTsopN0bvESKMW%2Fx8FItZnEZd1KYwtVBi37oxwyyPQG6Se8dvsFfss0ZfDjS4%2BZe2IFgnQ2CKHl9zAI6Bxa%2BdGAUkY8v91hJ3Alo0DqnLmXm7sLqhVRzXsTkeoGE1Kh1YnU4uA7JA6WoA9w0RHjwf63YGP%2FBy7zCXrozKBjqkASpCchVGKg%2BlMbaLPmqopXAeL%2BB0RxBXXyyS4ljgoH315EXwhp1H77r1mqXPZvSOEsqzIrttuBPzjvc8XCAmmhCzKnLWSgVRyc69FOYuOLr1ov4BXfbgXQW3wgG8uhsZW1EibI9h3BnOkP2P3qNsqcBZMtDQy4%2F8Wsc%2Bgg4Jgl0XRhvwnq9vdGVcC18QHU5G45aD%2Fm%2BUCfHvA3eWl8g4wkY5K8dF&X-Amz-Signature=0d6eb384c42cfbaad42aae5bb828c98f332578dc07fdd8ee09be3a3f6797a325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

