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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4IW2AL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLN6TsgxAtXvbCXwmgndpOcZ%2FYLlCwQ2q1yAIp5IR0gIgagSywHuJLfR9OFHT31r11ZJ42rAZSDtjgrSfSDNp3EQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK58z50gcXw39RgmjyrcA3r5PJSot1fHO5yLEbqQCLsvn54LqFIpQo1ID5lKiy6w7UOXyTFXQi0e8oILT5rQUg2N9QhAr2CKEUNh8hnVss2dGwas4gwrdhGoUudQPxQEICC0MEMfRT1hDDAqsD%2BnKPpz7ivzmq6u2EzXeCRzGcyID4%2FVMNmrDg%2F3xImKl02TmjAw7V30zy1Yv5OSYRp4S9G%2B34m48irNBryid5O%2FxRPZ9dec7mKhy2jNWJzdVvJK8M6RraYtFn903mmFwXNlRYw0xhSPmE8KBgUjRfDzDGLSeKYqQlGlb2k0RwiBVhSRGNkS5McSjPbTs4V0IF5%2BZpyurJwGce7nEsJj%2FuX8p%2F1z9ox6JsTtuwO8oCYzHUA6SVUfwi89FIk8vTdd7AvTgLVoOt80k0eKBFaYjqR8qbKl57pGlh1t7j8aHUWWdXNFwSTcf7kLzrscqmhzriM1KWLBlBrKw8%2BgSagCI7O0mwU4YrKWhO%2B73EoW8KNNzH8myAffsNXCOPookGP4p05cVUIIOOTBOlpiVWrJe7Ioo0xL6fSgH1APpwOazF9TD9gvoB2YnEdZ%2Bajl1hy7oO3rvbqqBCYX2kKkCHq4QrRnGGcvDB1OXWXO3WyxMii63VZQw5tS98qoPpTL5tQUMNOujMoGOqUBCPf%2FLNQiK0enQvnfgdVJB1svnfQO9TGblPQ6Ily%2B9HRE8daMqQDt4AOc6p4WPUUW4MKpJBYo2OTfbivK8XDFSVtDHe8Cwwho9O5jYqPWZ8QEgMhqnV%2F0fElT%2BcAaPBRTpH9h7D6rhFKtRHj6Xe6IxehMzTZVvC7%2FWX3eq7t8XU28k1LW2eXSEceQFRR0Zm0WjTz8ACMkWQNlqYDyVN0HrGiU3Vpz&X-Amz-Signature=26bedfcacf7147d4a6f85b8308a8db504daa17cd6e42c5eac743088289715131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4IW2AL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvLN6TsgxAtXvbCXwmgndpOcZ%2FYLlCwQ2q1yAIp5IR0gIgagSywHuJLfR9OFHT31r11ZJ42rAZSDtjgrSfSDNp3EQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK58z50gcXw39RgmjyrcA3r5PJSot1fHO5yLEbqQCLsvn54LqFIpQo1ID5lKiy6w7UOXyTFXQi0e8oILT5rQUg2N9QhAr2CKEUNh8hnVss2dGwas4gwrdhGoUudQPxQEICC0MEMfRT1hDDAqsD%2BnKPpz7ivzmq6u2EzXeCRzGcyID4%2FVMNmrDg%2F3xImKl02TmjAw7V30zy1Yv5OSYRp4S9G%2B34m48irNBryid5O%2FxRPZ9dec7mKhy2jNWJzdVvJK8M6RraYtFn903mmFwXNlRYw0xhSPmE8KBgUjRfDzDGLSeKYqQlGlb2k0RwiBVhSRGNkS5McSjPbTs4V0IF5%2BZpyurJwGce7nEsJj%2FuX8p%2F1z9ox6JsTtuwO8oCYzHUA6SVUfwi89FIk8vTdd7AvTgLVoOt80k0eKBFaYjqR8qbKl57pGlh1t7j8aHUWWdXNFwSTcf7kLzrscqmhzriM1KWLBlBrKw8%2BgSagCI7O0mwU4YrKWhO%2B73EoW8KNNzH8myAffsNXCOPookGP4p05cVUIIOOTBOlpiVWrJe7Ioo0xL6fSgH1APpwOazF9TD9gvoB2YnEdZ%2Bajl1hy7oO3rvbqqBCYX2kKkCHq4QrRnGGcvDB1OXWXO3WyxMii63VZQw5tS98qoPpTL5tQUMNOujMoGOqUBCPf%2FLNQiK0enQvnfgdVJB1svnfQO9TGblPQ6Ily%2B9HRE8daMqQDt4AOc6p4WPUUW4MKpJBYo2OTfbivK8XDFSVtDHe8Cwwho9O5jYqPWZ8QEgMhqnV%2F0fElT%2BcAaPBRTpH9h7D6rhFKtRHj6Xe6IxehMzTZVvC7%2FWX3eq7t8XU28k1LW2eXSEceQFRR0Zm0WjTz8ACMkWQNlqYDyVN0HrGiU3Vpz&X-Amz-Signature=38d2609dd2f1420f2a1538f0f1f3c378e06a3ac4061ce80afe45832a64e8a935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

