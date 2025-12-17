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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AKSGQY7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD828y%2BL1vQslizjsPpUiHgJP1XNF5bmXtysfMZcxbXuAIgWZrI2FlmtlGl1cEk9qwaNFRnINK7U9s%2Fvo62pKOYi1gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAT2vP8hEgog1h8fuircA5hNTBarhQYkoxcPOFAGyAiHFotklcFlXkLowHooOWXQMy8VIvVx2iM2eKzwYsjpNgkenMtAiznvoahF5i7fvxrhp3Ccumj5kmRXs6l9aWZFoaID1y238XonnTleHZ3yGu4bAmz%2FMGkQCn2EXfZyc7%2FKjxBlGlqZhcqEv2X4Rw11QkjziXeJZmk4926xWlJaFNrRGQaWctsbryzg8qEXh%2F5TJaspG%2FYfI1ItrrlNLqw2mku6zhcyYfWG8%2BtXc3ssUpwemUAH%2Bv%2BmUpSfTG%2FUY6a%2BXAslSPEPQ%2BiRLiRhonrfV98xVHgY0oLHBJehD0%2FvdJEwK4ve8LYpOoEzpMHF9JTlUmZiKPotxtYN5YQ0rBISuwRkTXBNTLnFRPkJTpgL3UtuVDXlxhYJi7QHE7rBE6lMkEvJfa5%2BCvV8bG73PfHEJw2C8c04zAwfajPP0o7X40vuU5D7q2LKxa1cYXU2SseW4lkxcNypRV4Xb%2BBn8k8MDrlhmNVwmNmAOXiUEU%2B9jP0fcIFzqIZYnd7bVjMkKByeyTVEaZe71Xg8DResMfaUr55qqQMgVwJehBZaHuBpaIpksfSCmoxB88rvWVOMJYMjqo2EYxCSLzTnYh3r8AcHJNuwQjU1XBkiUB9XMPWtjMoGOqUBYG1SfMdhBobHoOVRchJDDpvRpiZACkNTPQKrWHBexCUf%2FGRtKDOnGH5vVLAuAu4aN32FANWA2o6eU9o1oAsHUQxjwAsyAArnF%2BCfsDaDxoXsLHBbZ5eNtzE3yp1PhwiKzEBlmaBfsLs2iIxd11r6A1gSMBfdYcB7m640iniunfvG%2Bg9vgwGj5VxM2Hn6RdxaxeZ0fNIEtehmPVxK8Ddhbv1PY2Vy&X-Amz-Signature=4155bc8e35c4f64754057ec1c9faf1a8d6db163db2666a1714b593e3ef5d487f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AKSGQY7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD828y%2BL1vQslizjsPpUiHgJP1XNF5bmXtysfMZcxbXuAIgWZrI2FlmtlGl1cEk9qwaNFRnINK7U9s%2Fvo62pKOYi1gqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAT2vP8hEgog1h8fuircA5hNTBarhQYkoxcPOFAGyAiHFotklcFlXkLowHooOWXQMy8VIvVx2iM2eKzwYsjpNgkenMtAiznvoahF5i7fvxrhp3Ccumj5kmRXs6l9aWZFoaID1y238XonnTleHZ3yGu4bAmz%2FMGkQCn2EXfZyc7%2FKjxBlGlqZhcqEv2X4Rw11QkjziXeJZmk4926xWlJaFNrRGQaWctsbryzg8qEXh%2F5TJaspG%2FYfI1ItrrlNLqw2mku6zhcyYfWG8%2BtXc3ssUpwemUAH%2Bv%2BmUpSfTG%2FUY6a%2BXAslSPEPQ%2BiRLiRhonrfV98xVHgY0oLHBJehD0%2FvdJEwK4ve8LYpOoEzpMHF9JTlUmZiKPotxtYN5YQ0rBISuwRkTXBNTLnFRPkJTpgL3UtuVDXlxhYJi7QHE7rBE6lMkEvJfa5%2BCvV8bG73PfHEJw2C8c04zAwfajPP0o7X40vuU5D7q2LKxa1cYXU2SseW4lkxcNypRV4Xb%2BBn8k8MDrlhmNVwmNmAOXiUEU%2B9jP0fcIFzqIZYnd7bVjMkKByeyTVEaZe71Xg8DResMfaUr55qqQMgVwJehBZaHuBpaIpksfSCmoxB88rvWVOMJYMjqo2EYxCSLzTnYh3r8AcHJNuwQjU1XBkiUB9XMPWtjMoGOqUBYG1SfMdhBobHoOVRchJDDpvRpiZACkNTPQKrWHBexCUf%2FGRtKDOnGH5vVLAuAu4aN32FANWA2o6eU9o1oAsHUQxjwAsyAArnF%2BCfsDaDxoXsLHBbZ5eNtzE3yp1PhwiKzEBlmaBfsLs2iIxd11r6A1gSMBfdYcB7m640iniunfvG%2Bg9vgwGj5VxM2Hn6RdxaxeZ0fNIEtehmPVxK8Ddhbv1PY2Vy&X-Amz-Signature=98c1c42394ad84595f43d7ea39ab9798bdd1c7aa7df7a615a6085afc0bc4b65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

