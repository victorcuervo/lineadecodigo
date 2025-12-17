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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDBR3E7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzXRTsfNZaDobzeXbB%2BEsQxWnop9YUZ7j7NPpbeF%2FnNAIhAKpwRcruWWKvgvB8pvOpIW9KuaYT4owtI5NxPxDsZ76yKv8DCHwQABoMNjM3NDIzMTgzODA1Igx808LZUxY8bM5iBOgq3AMKsJzSAfDEsjZCqJpfXdrzlNZfLA%2FjpwNk0CysviYvaFXtFip0cxgoKMM9pi%2BHNnd1oxeMhVf2GCtQw4VFmiFjYNKR1mYUMeAeON44evKrecWrFXzwwjLnMVjB4KbdYPMQFJuNmgsqtREg3O4JaMb%2FLt7C9nXY%2FH6dArBIz1rVJuhv6GShn511YBOFCn%2FwfLtcMD6bAa%2BFVzDL9jS5j0WitPeQLFyLsMPzM2FkTDQnCAPD%2BUNk6WfHkkZMNAYKjA%2FhAYoyZrPiABSxL12YOjdQi7FLSMIQvl1uvmhXoE4glY1pGSJFex0Fm%2FD%2Bdybu9QLNCo9d6asQE62DG1k23QlbRTMsrPOoB4U3oh5DBupH8icoes21P66fftRREEy4v98BplNzOxtBaRQFai2QmiNMftAeyZtnQHi3Y8WVDoUXDy6Rok79623GN8DYZZQzv1o1S5%2Bfua76ozS9eWqqPI6%2Be28VWTmdqVyqkzLP1iMIRxDRqnalGvEAKb4sVPVmt4ZgxiKdRmfDfRr1bcN1HoFUt1osqsQUs2Lb997%2BDMAMMOO6dzlKLL33z5jj%2Fk%2B%2BRHcflFbELQs7%2Fqxehy8g3%2BS63N9OMPr8lNj9YfvOydzKw7K3Xa9PoLihiLyRNTDBj4rKBjqkAaHOgDxZFpmTFYb%2B6E2GgWaL1xk5%2B3eP4fce%2BUI5BYhj%2BmWXYotzRAsz90vplbbtkZfuRlZHJt8z40jCGL8HCj0vu66218Xt3oc%2F7kV9joPqeqyHBD8xPrZCNlcpfVIKLJqDXX4jq4AE42MloHvwC%2BGnBES7ZN7lkJcZ2YHpGJYnHBOpyGLdtYxt%2FtQ0%2BKDYdQMC25mx6xenHYsADxtfK1punA2F&X-Amz-Signature=cdd6205d6c6818264bfefd8b7987b46dcf095b6a425bdde19e36826b8ae9c6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDBR3E7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzXRTsfNZaDobzeXbB%2BEsQxWnop9YUZ7j7NPpbeF%2FnNAIhAKpwRcruWWKvgvB8pvOpIW9KuaYT4owtI5NxPxDsZ76yKv8DCHwQABoMNjM3NDIzMTgzODA1Igx808LZUxY8bM5iBOgq3AMKsJzSAfDEsjZCqJpfXdrzlNZfLA%2FjpwNk0CysviYvaFXtFip0cxgoKMM9pi%2BHNnd1oxeMhVf2GCtQw4VFmiFjYNKR1mYUMeAeON44evKrecWrFXzwwjLnMVjB4KbdYPMQFJuNmgsqtREg3O4JaMb%2FLt7C9nXY%2FH6dArBIz1rVJuhv6GShn511YBOFCn%2FwfLtcMD6bAa%2BFVzDL9jS5j0WitPeQLFyLsMPzM2FkTDQnCAPD%2BUNk6WfHkkZMNAYKjA%2FhAYoyZrPiABSxL12YOjdQi7FLSMIQvl1uvmhXoE4glY1pGSJFex0Fm%2FD%2Bdybu9QLNCo9d6asQE62DG1k23QlbRTMsrPOoB4U3oh5DBupH8icoes21P66fftRREEy4v98BplNzOxtBaRQFai2QmiNMftAeyZtnQHi3Y8WVDoUXDy6Rok79623GN8DYZZQzv1o1S5%2Bfua76ozS9eWqqPI6%2Be28VWTmdqVyqkzLP1iMIRxDRqnalGvEAKb4sVPVmt4ZgxiKdRmfDfRr1bcN1HoFUt1osqsQUs2Lb997%2BDMAMMOO6dzlKLL33z5jj%2Fk%2B%2BRHcflFbELQs7%2Fqxehy8g3%2BS63N9OMPr8lNj9YfvOydzKw7K3Xa9PoLihiLyRNTDBj4rKBjqkAaHOgDxZFpmTFYb%2B6E2GgWaL1xk5%2B3eP4fce%2BUI5BYhj%2BmWXYotzRAsz90vplbbtkZfuRlZHJt8z40jCGL8HCj0vu66218Xt3oc%2F7kV9joPqeqyHBD8xPrZCNlcpfVIKLJqDXX4jq4AE42MloHvwC%2BGnBES7ZN7lkJcZ2YHpGJYnHBOpyGLdtYxt%2FtQ0%2BKDYdQMC25mx6xenHYsADxtfK1punA2F&X-Amz-Signature=6fd6e7fb3e9c95e99395f7cb3e3256aee2b70671e3f3e6f649ca6d55cc27d6b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

