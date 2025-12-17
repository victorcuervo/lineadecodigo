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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKN33SWB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR%2B3lJdU2sM3f%2BZyeZonLm92FuMcETbSwr%2B80WdifpgAiAA3ZgwoAh6tW2T4WUrf26lup96C9tEgWk3PmmavnduwSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMScvIZJDoz%2BblF432KtwDia%2FmMG44d3Y%2B%2BtIQJ0qHq%2FDG%2FuFuTgDdmWpFDkWJYefc%2B2LAjjKdtHs4MEAml2uL15wp7ui5KxauETp%2BOvYSOX5w1J1cOSJK56A68SCuneiq%2FJ4Z8OvIaEZkW%2FlFuZORvT0wasjnWgXFshDflW083NkSUNxpOxBibQC4Gl4aNzibfcj1qlNm3YBeCqAzWjezz2FANmoBzRWYmclLHl6m8PHWVopgXKZ%2F9he%2FTvYKrGJ45VwAMmSjt2zyCb3bPmarB7aU3S2M9bvfHTv9aiqgxIwTXymAzHSYsoZ4qDbRDJrvXJKe0%2BYCr3VofsN3aXjsfLDlXppp0lB5gvDd2GsEgdWR9GoEg2e0tgYRf7oLVIvYqbndAd%2BOIPd4%2BVXHHqG7DyWgNyvqy6fyYfeSNeQeSXXMqsvXUTVzTtN%2F04SkmLqbj1sskNy8fe06xLy7o115nVXrg57%2BGmvwaowhnFzl7EWq9InOkVmQiEfdJXsY5mmQDUjS4Fmft1hzmhAc87xfv4DfEQygsNv4swzUlFKi3UCh1gPlzK9TAP2OI5khq1vOkfRMTEkeWsMMr7cpyPApSNTY84%2FQ9ydku4AdF4E%2Bus4cE%2FmPYnZNOvNEzQlyuqPjli4EEtYfyZ9M7JwwtIKJygY6pgEOJ9%2FwBIqXq2nbQf3MsKbbQWaUIO0VZ%2Bf%2FrqEtjq7nfF%2BRlwzUuWtbnjyFS%2BOsIEuySXH8VwRAnmc06Qg%2B9u3pA%2B2z9NsWLBuZCm14YtNz30Oqjb15zZmQjcB%2Btja8cxHwU43AWxHwDQpYbT8MG2KDKAoE1uGULvpAolAY9M10Lg8UTM7RBJ8rm5iZWPfiaaw7lwV6w23wZcTW2zjZGOgc79nsZp5S&X-Amz-Signature=c1c268e27a662d1b487ec7b29b3becb5f7ab1bc09b59fcf8e619776b2d2c78c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKN33SWB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHR%2B3lJdU2sM3f%2BZyeZonLm92FuMcETbSwr%2B80WdifpgAiAA3ZgwoAh6tW2T4WUrf26lup96C9tEgWk3PmmavnduwSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMScvIZJDoz%2BblF432KtwDia%2FmMG44d3Y%2B%2BtIQJ0qHq%2FDG%2FuFuTgDdmWpFDkWJYefc%2B2LAjjKdtHs4MEAml2uL15wp7ui5KxauETp%2BOvYSOX5w1J1cOSJK56A68SCuneiq%2FJ4Z8OvIaEZkW%2FlFuZORvT0wasjnWgXFshDflW083NkSUNxpOxBibQC4Gl4aNzibfcj1qlNm3YBeCqAzWjezz2FANmoBzRWYmclLHl6m8PHWVopgXKZ%2F9he%2FTvYKrGJ45VwAMmSjt2zyCb3bPmarB7aU3S2M9bvfHTv9aiqgxIwTXymAzHSYsoZ4qDbRDJrvXJKe0%2BYCr3VofsN3aXjsfLDlXppp0lB5gvDd2GsEgdWR9GoEg2e0tgYRf7oLVIvYqbndAd%2BOIPd4%2BVXHHqG7DyWgNyvqy6fyYfeSNeQeSXXMqsvXUTVzTtN%2F04SkmLqbj1sskNy8fe06xLy7o115nVXrg57%2BGmvwaowhnFzl7EWq9InOkVmQiEfdJXsY5mmQDUjS4Fmft1hzmhAc87xfv4DfEQygsNv4swzUlFKi3UCh1gPlzK9TAP2OI5khq1vOkfRMTEkeWsMMr7cpyPApSNTY84%2FQ9ydku4AdF4E%2Bus4cE%2FmPYnZNOvNEzQlyuqPjli4EEtYfyZ9M7JwwtIKJygY6pgEOJ9%2FwBIqXq2nbQf3MsKbbQWaUIO0VZ%2Bf%2FrqEtjq7nfF%2BRlwzUuWtbnjyFS%2BOsIEuySXH8VwRAnmc06Qg%2B9u3pA%2B2z9NsWLBuZCm14YtNz30Oqjb15zZmQjcB%2Btja8cxHwU43AWxHwDQpYbT8MG2KDKAoE1uGULvpAolAY9M10Lg8UTM7RBJ8rm5iZWPfiaaw7lwV6w23wZcTW2zjZGOgc79nsZp5S&X-Amz-Signature=9fd9d530e05998de2da34cf930283e64117c8f31365b990785b09cd4c27362ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

