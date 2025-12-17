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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROAQXCF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClAqDB1%2Ff6tDSXQLLjb9cQCXGIuhW7Y7XLZgQl5PqlgAiBCS%2Bm%2BDNN6VDZuPC9EfomhyuEBHnEy0YxmVs70wNvEKCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMxNj6XCMxre3w3vpwKtwDAnH8LRrx7Gw%2BcOyJL5dqYvVv11VohCANbi6NSHnHEVNSKcnMejHD1RDD9Uz3UPYdDjq2c1iFkHTGPT4MHB7rsY4ynwXk5Ygaf4itMVNTWcaH4PhUMYnyUNCmsdIwfs0cH14oHK2wSM5wUcAMJwBdjhhWIl5K9kIlxe7sWoG3OFc8wpy4uo%2FKOc97fJlv2vweTHXLgcdNj8%2Fudw%2BWs5TP5iCPlyBUeUE5NeUwOGvqcSxxQdpEpC6FGKcQS%2BdkjOnk2MPMt%2BRXKXIHwf9%2FI7VBprueTosH4viFv6lVFL17Sk19fjpVcNXz1OzbvHhX%2F2onr96GtpNPfE5tC4FJVrNI5B3fVzhSJOWUtuMcV0eMYKA8OWyKigW7GW%2FvKOsPIkGE%2FU1CcP2rizumiZXeBGsnFB5aJttQy36ro%2Bor0s%2F%2FEj3GYyt02%2B%2Buza0Izo2KEBES3MqMU%2BtAkdsgEDXWzOT32dkJBq%2BIyrlQ0r9OsWKkgifaKwNRY2xdo7wHhleN8UCLWsFPAtzFlWYDn06YHHQUZyQRHuGgVikU0m1M512EXOf6ugXnQ3BTgdsTBWoDcmdke9TaGuNsQz5Ku9iVsMQ2qkv4%2FGKz%2F96%2FNQRW94hcjOMfQkGPiqD7tXUJpIowvumIygY6pgGqQkQG0%2FdjzGF2qFboQ9FGbeRpLe8Rx5a4nPz7WzsK%2BehpnAMS0MynfEcrQRIBvPvhd2rsX3%2B%2BjRpZ%2FfdAuPrP9l4nUEzWLLuDaoMh1V5NpgaH9rWDtHtUHhj5O0Adctrb2K6Wbntj5gV%2B1yi7D74EwEnxGQCKBBameZkJpEoVjfOg9B54xx%2FPIZQ1%2FIkFijobXn4M2brBb7V96M%2B8CFPn52K1Zx6v&X-Amz-Signature=e9674960ba72997428c1e299e43e896516b35f442995d66379cf1dfb6981e2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ROAQXCF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClAqDB1%2Ff6tDSXQLLjb9cQCXGIuhW7Y7XLZgQl5PqlgAiBCS%2Bm%2BDNN6VDZuPC9EfomhyuEBHnEy0YxmVs70wNvEKCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMxNj6XCMxre3w3vpwKtwDAnH8LRrx7Gw%2BcOyJL5dqYvVv11VohCANbi6NSHnHEVNSKcnMejHD1RDD9Uz3UPYdDjq2c1iFkHTGPT4MHB7rsY4ynwXk5Ygaf4itMVNTWcaH4PhUMYnyUNCmsdIwfs0cH14oHK2wSM5wUcAMJwBdjhhWIl5K9kIlxe7sWoG3OFc8wpy4uo%2FKOc97fJlv2vweTHXLgcdNj8%2Fudw%2BWs5TP5iCPlyBUeUE5NeUwOGvqcSxxQdpEpC6FGKcQS%2BdkjOnk2MPMt%2BRXKXIHwf9%2FI7VBprueTosH4viFv6lVFL17Sk19fjpVcNXz1OzbvHhX%2F2onr96GtpNPfE5tC4FJVrNI5B3fVzhSJOWUtuMcV0eMYKA8OWyKigW7GW%2FvKOsPIkGE%2FU1CcP2rizumiZXeBGsnFB5aJttQy36ro%2Bor0s%2F%2FEj3GYyt02%2B%2Buza0Izo2KEBES3MqMU%2BtAkdsgEDXWzOT32dkJBq%2BIyrlQ0r9OsWKkgifaKwNRY2xdo7wHhleN8UCLWsFPAtzFlWYDn06YHHQUZyQRHuGgVikU0m1M512EXOf6ugXnQ3BTgdsTBWoDcmdke9TaGuNsQz5Ku9iVsMQ2qkv4%2FGKz%2F96%2FNQRW94hcjOMfQkGPiqD7tXUJpIowvumIygY6pgGqQkQG0%2FdjzGF2qFboQ9FGbeRpLe8Rx5a4nPz7WzsK%2BehpnAMS0MynfEcrQRIBvPvhd2rsX3%2B%2BjRpZ%2FfdAuPrP9l4nUEzWLLuDaoMh1V5NpgaH9rWDtHtUHhj5O0Adctrb2K6Wbntj5gV%2B1yi7D74EwEnxGQCKBBameZkJpEoVjfOg9B54xx%2FPIZQ1%2FIkFijobXn4M2brBb7V96M%2B8CFPn52K1Zx6v&X-Amz-Signature=fbb3f05037ec977f839d30f3ab1964ba8240cff0b94c6bb1acb7b5c635d0cafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

