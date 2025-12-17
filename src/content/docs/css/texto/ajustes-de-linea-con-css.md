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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PVDSYQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEp2mSkuBDvD2TcatHJ6rM2Dl8ZbLEBid3NjZ0xkjIkuAh81Acyet3QmJTgtV2fJrwsG5QHSk%2BuXjiTobRqj%2FYjeKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk0JdKrc%2BxGOgqahIq3AODxxb4oiYf9j4kjVtinvYR33TJYfGP%2BdIaEpF7iLZ2tHB1gJotQkwx5bjCQNnqaJfDrG3USg%2B80MsXNd6NTN%2BRUYqYYud1xjeelDX%2FSm%2Fz4U1BMHDHRpHBveYR6AFXUyBywBFy8au%2FEQPEuTZiBzA3fB0gjukypqUmVAKX9L5pFjT0bpPKVS%2BqRlD89nJM%2B1J1AAb2TtaThDUK%2FEvEzk06lMaeW4vQWJAJyPNNlOqGij4137SCYhRVchFje015bK3FToCXEJQMrYzcn8eaXPPI2VtK4J7mQVhQlapHnAKfVlNEPX%2B%2BwCE%2BNHxQP9odQY0pfeBDc3V%2FUAi1O0TQZ4iYVlnlOwLNI9wu40j11EdxbAW56S6WBpjzpXweRRlemcQLsIOxpbaK2EtVaowXMq5lcN2m3dHUxsMLWXeRL77JSBNTPTsYhuFs8yWEzOyn55znS033b7k5x2If9YQxwSkVH3KxftGqBctiJwqwwx2LdizrivtNcj92jdJbkoU1hL%2B0k5oCNlgzmzSMINUn4VDyg4vLnj8SrGcoYRIkaEE8LESpUiyYnRrOFOJSasx09qzypwk%2B8QnLFGB20TA1OJYqPB16695ItxddbOqYiO868NGT9LHeD4bJs6Fx1zDugYvKBjqnAaYEolcubWv8Dsugcg%2F1QyMeKX15npJgmJ4BDlgGzp67rwuEI%2B4psaZrqDF1bKll0Yfrf%2BwqE3kqcTqpHc9cL1xDXuO65QkJ%2B5JJO%2F3K3jj0qcZTxEowptabaI9IIIOjaGx9tl8eEDKOHtPSXMPqA7Icsyhr6DKrS%2F1We0wPfU3xEoRx7FKRohUZYg0mqV4wORsTFmnSzsR27NJvm0HWIemEHnWIbrL4&X-Amz-Signature=289537a5a994b61571950212d075634d7509cb31e201c1e1eb8d6596c68be686&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3PVDSYQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEp2mSkuBDvD2TcatHJ6rM2Dl8ZbLEBid3NjZ0xkjIkuAh81Acyet3QmJTgtV2fJrwsG5QHSk%2BuXjiTobRqj%2FYjeKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk0JdKrc%2BxGOgqahIq3AODxxb4oiYf9j4kjVtinvYR33TJYfGP%2BdIaEpF7iLZ2tHB1gJotQkwx5bjCQNnqaJfDrG3USg%2B80MsXNd6NTN%2BRUYqYYud1xjeelDX%2FSm%2Fz4U1BMHDHRpHBveYR6AFXUyBywBFy8au%2FEQPEuTZiBzA3fB0gjukypqUmVAKX9L5pFjT0bpPKVS%2BqRlD89nJM%2B1J1AAb2TtaThDUK%2FEvEzk06lMaeW4vQWJAJyPNNlOqGij4137SCYhRVchFje015bK3FToCXEJQMrYzcn8eaXPPI2VtK4J7mQVhQlapHnAKfVlNEPX%2B%2BwCE%2BNHxQP9odQY0pfeBDc3V%2FUAi1O0TQZ4iYVlnlOwLNI9wu40j11EdxbAW56S6WBpjzpXweRRlemcQLsIOxpbaK2EtVaowXMq5lcN2m3dHUxsMLWXeRL77JSBNTPTsYhuFs8yWEzOyn55znS033b7k5x2If9YQxwSkVH3KxftGqBctiJwqwwx2LdizrivtNcj92jdJbkoU1hL%2B0k5oCNlgzmzSMINUn4VDyg4vLnj8SrGcoYRIkaEE8LESpUiyYnRrOFOJSasx09qzypwk%2B8QnLFGB20TA1OJYqPB16695ItxddbOqYiO868NGT9LHeD4bJs6Fx1zDugYvKBjqnAaYEolcubWv8Dsugcg%2F1QyMeKX15npJgmJ4BDlgGzp67rwuEI%2B4psaZrqDF1bKll0Yfrf%2BwqE3kqcTqpHc9cL1xDXuO65QkJ%2B5JJO%2F3K3jj0qcZTxEowptabaI9IIIOjaGx9tl8eEDKOHtPSXMPqA7Icsyhr6DKrS%2F1We0wPfU3xEoRx7FKRohUZYg0mqV4wORsTFmnSzsR27NJvm0HWIemEHnWIbrL4&X-Amz-Signature=41bcfd8cdc5d8ebb4b37787d7966ab931c554ff61e4c6a227d75ac859f58d841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

