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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQTWGFK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqKmMOcsluRl%2FZsl7Q6LBUxDLfjEIs%2B4EJwjkCO1%2B6PAiEAiX3oRwa51shuWQY%2BYrpSuQXp5MuZPMs2n9Vjb8a4bHcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN3AYKlbKyKqP%2B9QfyrcA6XxvqRx5UIG2YhE6O8VyhMnPSLq61ul0xdEbZN%2BIHro3Ad8fi1TqYcgDN%2FmILaKXXTKcoubbBQvGp9eB13Bk9Su12Y13QKiP8SQbu9yZEWKqGf4ag56NgmNaBSKNZjxlichHQpDWBeaezBs5Wp0ya2zhUaV4zLQszceHBhwbBHxhBE7%2B28Dav7odC%2FIq10RUEtpJHhOVmsR3sHRQeCec4MdukxpUwQl5PsItXP9nvouX2lPBt5a6UAxWUS%2BMCZcl63slSDvSWwAfoCL12zgLjxaoNpDsUspb%2BFNCl1CX7XUoFYKcIt3%2By4AkT1oh41vegzwrql4xDHIiCs8MJlhvgaOUPRNWOjT9KOi%2FdSi4JiIzB2PhMk3hOmJyb0YqSyHm5JGQDWO3t%2Fq3%2FN36gVS9BnokouGPhQohUWpMMkuAoF8y7gczds5tTQxN15nvb84QzBOQ5JQqoXWNC9l%2BW%2Fyz9LNHsT%2B6DcNExZLLEHgGQiqtw8KZzvNf1QMP0CLO6KE2wfWUVYsIHJ1hbuAgGeiypeBhWeEmjor14fgtbb8ZSmmJklyn0AXgRyMSFflcx59bPsmuGtlVPIA6PxgwYeymbozB%2BMdZLmoSRql6P%2FYJlIs3cOjSJ7t2yA3TOcNMLfhisoGOqUBRssz%2BhZpNmPHXf%2BnQtvtxn1k57cKI0sXofqSuoSLjDTHIlvngutqR5cFfgcf%2F8JDAMWVwEqi9se5zQM8kB0wR78ck9PYJXQyIe6Y%2ByfrK0CnI911mD6W%2FzGZBWEzrF92YRCih4N%2FLYXII7f32AKmdgb7Pwv7kavw2mrPv6iZ1qDHswJe6QsqKHgR8bytBHF%2BKzl1CVVYeDYNug%2FEH%2B9UeokxfJyO&X-Amz-Signature=54f8886d5439cb50772b180d91be9c3eedb4166282634215e8cdb4f97bdbe14a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDQTWGFK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqKmMOcsluRl%2FZsl7Q6LBUxDLfjEIs%2B4EJwjkCO1%2B6PAiEAiX3oRwa51shuWQY%2BYrpSuQXp5MuZPMs2n9Vjb8a4bHcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN3AYKlbKyKqP%2B9QfyrcA6XxvqRx5UIG2YhE6O8VyhMnPSLq61ul0xdEbZN%2BIHro3Ad8fi1TqYcgDN%2FmILaKXXTKcoubbBQvGp9eB13Bk9Su12Y13QKiP8SQbu9yZEWKqGf4ag56NgmNaBSKNZjxlichHQpDWBeaezBs5Wp0ya2zhUaV4zLQszceHBhwbBHxhBE7%2B28Dav7odC%2FIq10RUEtpJHhOVmsR3sHRQeCec4MdukxpUwQl5PsItXP9nvouX2lPBt5a6UAxWUS%2BMCZcl63slSDvSWwAfoCL12zgLjxaoNpDsUspb%2BFNCl1CX7XUoFYKcIt3%2By4AkT1oh41vegzwrql4xDHIiCs8MJlhvgaOUPRNWOjT9KOi%2FdSi4JiIzB2PhMk3hOmJyb0YqSyHm5JGQDWO3t%2Fq3%2FN36gVS9BnokouGPhQohUWpMMkuAoF8y7gczds5tTQxN15nvb84QzBOQ5JQqoXWNC9l%2BW%2Fyz9LNHsT%2B6DcNExZLLEHgGQiqtw8KZzvNf1QMP0CLO6KE2wfWUVYsIHJ1hbuAgGeiypeBhWeEmjor14fgtbb8ZSmmJklyn0AXgRyMSFflcx59bPsmuGtlVPIA6PxgwYeymbozB%2BMdZLmoSRql6P%2FYJlIs3cOjSJ7t2yA3TOcNMLfhisoGOqUBRssz%2BhZpNmPHXf%2BnQtvtxn1k57cKI0sXofqSuoSLjDTHIlvngutqR5cFfgcf%2F8JDAMWVwEqi9se5zQM8kB0wR78ck9PYJXQyIe6Y%2ByfrK0CnI911mD6W%2FzGZBWEzrF92YRCih4N%2FLYXII7f32AKmdgb7Pwv7kavw2mrPv6iZ1qDHswJe6QsqKHgR8bytBHF%2BKzl1CVVYeDYNug%2FEH%2B9UeokxfJyO&X-Amz-Signature=c76a2785e440b6e3c5549a0ef5628372f64676ddbc28e74bf18d1734e6d94345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

