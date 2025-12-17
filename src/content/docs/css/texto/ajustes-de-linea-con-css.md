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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG5XJGWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDytvZ68S73J8OTYeGP%2FrvPXCVdFisX4Owfj3aAyNTSHQIgUtBTUdHo4WxH%2Fpy3T5VEJTk37OIdqsWBXfrV69TuCm4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeuLCLFHuilX2Nk0SrcA86OLxs3ZwK%2BAIDD9acC48Th2X4HzAnZRKIe4ePuFusrJHKuBx8xkbZ1ImXL9s1vAnoHAJ8x6aJUlkLgZAcazDaqI%2BqOerH%2FeK9tasfd5UGyMh5U3iAAWg4fVauGFAnMRWJcL6pynPKEnTU%2FQsY61aj8KJ3BHXIVmFxDQx2G3qscztBEC7cLuC9NzIPtVOupkumzZTLKAsK0lZvDXc9yDIABJcSC%2B%2Fo1D9Prx7U6daE%2BPQ6f2O5pHegPvpdhZZTMQ2H0riCgdnyhXjA0sdBSoAqbGYsp58C106%2BYBghNWVvQvuBb3X8dbtqOQt6qLKCC42HYbTFfucZQcLfyClin7ZVVQkaeamKeqsPsp%2FvZ81kJjxe7HF%2BIYZ6aPLx7fBtX9d2FkDoldNdm05cCsAmuANnsabEX7MWfzULeassAZUj1LuFkhkduJKRaukaZmyU7WIe6YJJSP%2B3AdhbnoSOJotGjM7N5m4pIDgSHkLeDeWGUMJG4a166LTffzvElmx284PJRVEYVMEFUkXgonJqdz2mnkq53jraXL7fZv%2BxVH4Frbx2Lm9rzof75d86sHNoy4QiY8ZKtKL9p895Dgnc7qYOQbjnM73Zk2FpjYuT5NFBzYD%2BWTAWRkQZJCncwMLqfi8oGOqUBDekEYPCvTCRZbwS6EZJFUZwcRvttOl2CIhrFA%2FR6wDilipoqp%2BXZNkA19n8fG%2BmjPZ7slFSeqN5Plk9Wf0t5lg27K6bHUfgeKN0NUmh7hR7%2BymsDCPIsG571xBI%2FZurln6W%2FYYfG0I4ld2eVSnjZZUOB0QBgp8ylJODdzim4a1GtcEUNtYqbTNXFUq2TW7OpZhEOntRctqxjFlswznIYG2umSIO2&X-Amz-Signature=93175cf5c54d3da1bcb933c57fe7b8b4cd0d2ba334e5897ad2e0c1bc290333cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG5XJGWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDytvZ68S73J8OTYeGP%2FrvPXCVdFisX4Owfj3aAyNTSHQIgUtBTUdHo4WxH%2Fpy3T5VEJTk37OIdqsWBXfrV69TuCm4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeuLCLFHuilX2Nk0SrcA86OLxs3ZwK%2BAIDD9acC48Th2X4HzAnZRKIe4ePuFusrJHKuBx8xkbZ1ImXL9s1vAnoHAJ8x6aJUlkLgZAcazDaqI%2BqOerH%2FeK9tasfd5UGyMh5U3iAAWg4fVauGFAnMRWJcL6pynPKEnTU%2FQsY61aj8KJ3BHXIVmFxDQx2G3qscztBEC7cLuC9NzIPtVOupkumzZTLKAsK0lZvDXc9yDIABJcSC%2B%2Fo1D9Prx7U6daE%2BPQ6f2O5pHegPvpdhZZTMQ2H0riCgdnyhXjA0sdBSoAqbGYsp58C106%2BYBghNWVvQvuBb3X8dbtqOQt6qLKCC42HYbTFfucZQcLfyClin7ZVVQkaeamKeqsPsp%2FvZ81kJjxe7HF%2BIYZ6aPLx7fBtX9d2FkDoldNdm05cCsAmuANnsabEX7MWfzULeassAZUj1LuFkhkduJKRaukaZmyU7WIe6YJJSP%2B3AdhbnoSOJotGjM7N5m4pIDgSHkLeDeWGUMJG4a166LTffzvElmx284PJRVEYVMEFUkXgonJqdz2mnkq53jraXL7fZv%2BxVH4Frbx2Lm9rzof75d86sHNoy4QiY8ZKtKL9p895Dgnc7qYOQbjnM73Zk2FpjYuT5NFBzYD%2BWTAWRkQZJCncwMLqfi8oGOqUBDekEYPCvTCRZbwS6EZJFUZwcRvttOl2CIhrFA%2FR6wDilipoqp%2BXZNkA19n8fG%2BmjPZ7slFSeqN5Plk9Wf0t5lg27K6bHUfgeKN0NUmh7hR7%2BymsDCPIsG571xBI%2FZurln6W%2FYYfG0I4ld2eVSnjZZUOB0QBgp8ylJODdzim4a1GtcEUNtYqbTNXFUq2TW7OpZhEOntRctqxjFlswznIYG2umSIO2&X-Amz-Signature=9620b4ab0dbfbae53a4c0ab4de445b43cb3e22c3fecda5621309b9a464a4ef6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

