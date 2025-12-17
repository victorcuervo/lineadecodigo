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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QJGYVZP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGn6CXuXnflDascMPnoqczqK8r6sHVF1lkWPlvT6%2BmT8AiA8fxcDpCaRq7IkC6XKa6K2mCU4pn3llNOjx2PVn7qu3ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM5lf%2F3eBl0LQSMdb6KtwD2VkADRSNunziG%2FdwWnQxVr9FC%2BROMEDkJHTh0Z4rXcXxxdR0Fg%2FqYGacUzrnMHJvHIGFpSBb7Rh4HhZDMw3VCLbhfLzmoClYO2hr6GCWvUfB9dlxwBKbAgcTv%2FnoDeKXfSXv6SUGdXM%2FyADRMe1GkkO9dulOowh7alwrLsryv15H1FiXKqO76P%2BMUVkjVwAqcrWsblhsCSAMQH9xt7q7ZF0TCPenEvf2Hgp0pAGurhUuBCvveWVkfqUkNURXX7ONm1hdR4Bu5qsceMEnib6rkNNcFAUUFKIxscd4eDNmQtazEvJLya04gIc2J2EE%2Fg8rETQ0rRW5Ir%2BxeCWwHSQnfSYyY48FL9fU7VWZeH1XES2tsB8%2BIk8hxx6gx7qaCbBDDmtV0PdqWm5sBfzh6CR9KsNi9kBic%2FzHFXzm%2FK0ycgfHoSph58mpdHhbevfwN%2BSVEQDLoqMuygQszHm%2F97mzzg8bOTGo8z8Z64DV%2BQU8J%2BoSfneEowt0hvyQdV3KIWe2Y95Hq644yaIN%2FEz29w4njkPIv5Ka85XFZ8yAKtb4cSaHqLk21%2Fgr%2B2X1iFsKTtIsH6EmO1Rb1BBjj31ULHzZdJSyC5pod3G%2B07mdQ98z%2BlTt0ulPs6Xggx1kpVswzreJygY6pgEjSxVJHRJzggelOAnB16vV0%2BPj1ju%2FJqFW%2FE4uSZQcRRBxmrsMKEDfU3C6SseSzznR%2FOPctwHm%2F22A0QkOkELCwCNWuYVNFKbudn3%2BR2Gv8Mssoa2pd5kfnHe3WoBnEEWbd0XSNcVP60xi2S3zPK6azJ8YJ1P%2BRQTLHvT2W4j8oDdoQ%2BcbtUfNa0%2FraUb7XLiN7jq3ahIoZz8bHB5j2eg8Iu4%2BOVTz&X-Amz-Signature=214291a5a64924f7424b3147d1a260e4587ca129398e2bbf7218f6b2856403a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QJGYVZP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGn6CXuXnflDascMPnoqczqK8r6sHVF1lkWPlvT6%2BmT8AiA8fxcDpCaRq7IkC6XKa6K2mCU4pn3llNOjx2PVn7qu3ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM5lf%2F3eBl0LQSMdb6KtwD2VkADRSNunziG%2FdwWnQxVr9FC%2BROMEDkJHTh0Z4rXcXxxdR0Fg%2FqYGacUzrnMHJvHIGFpSBb7Rh4HhZDMw3VCLbhfLzmoClYO2hr6GCWvUfB9dlxwBKbAgcTv%2FnoDeKXfSXv6SUGdXM%2FyADRMe1GkkO9dulOowh7alwrLsryv15H1FiXKqO76P%2BMUVkjVwAqcrWsblhsCSAMQH9xt7q7ZF0TCPenEvf2Hgp0pAGurhUuBCvveWVkfqUkNURXX7ONm1hdR4Bu5qsceMEnib6rkNNcFAUUFKIxscd4eDNmQtazEvJLya04gIc2J2EE%2Fg8rETQ0rRW5Ir%2BxeCWwHSQnfSYyY48FL9fU7VWZeH1XES2tsB8%2BIk8hxx6gx7qaCbBDDmtV0PdqWm5sBfzh6CR9KsNi9kBic%2FzHFXzm%2FK0ycgfHoSph58mpdHhbevfwN%2BSVEQDLoqMuygQszHm%2F97mzzg8bOTGo8z8Z64DV%2BQU8J%2BoSfneEowt0hvyQdV3KIWe2Y95Hq644yaIN%2FEz29w4njkPIv5Ka85XFZ8yAKtb4cSaHqLk21%2Fgr%2B2X1iFsKTtIsH6EmO1Rb1BBjj31ULHzZdJSyC5pod3G%2B07mdQ98z%2BlTt0ulPs6Xggx1kpVswzreJygY6pgEjSxVJHRJzggelOAnB16vV0%2BPj1ju%2FJqFW%2FE4uSZQcRRBxmrsMKEDfU3C6SseSzznR%2FOPctwHm%2F22A0QkOkELCwCNWuYVNFKbudn3%2BR2Gv8Mssoa2pd5kfnHe3WoBnEEWbd0XSNcVP60xi2S3zPK6azJ8YJ1P%2BRQTLHvT2W4j8oDdoQ%2BcbtUfNa0%2FraUb7XLiN7jq3ahIoZz8bHB5j2eg8Iu4%2BOVTz&X-Amz-Signature=4c7a58e651492db1836d34701a73713a22fa93baa0c31547001d8f2e69712ec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

