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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6BFFCKV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc6MeW%2BuTTW6DJQnfX7pT9LYQ4aFSwsrnEpjj56IpQAgIgG%2BUPXSsXx9MG5WTVZlnwzNqQiQdTIwT6s5mhUjyIygwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHVVgdlnj34s9a18xircA9M3RGZxinmVy58TXRqu6hN7%2BNhFwME1AR48KG%2FfxHd82Fsqw%2Bj5nT0ePUzpQFUKpLKz%2Bra%2FMT9eaFkF8Atg2%2BV%2BViBzJAzBlP8pALl7v2O8MFowkzT9tEDoaKtBMOVghsuHxavwH3ypgMK3KSAPvcsXlupA63YE9XQNFvf4lisfHex7RxpyFbVbWxs89eI%2Bcmci9pm%2BmHsTi12GTweNLQGDw2AfkACgbfBlUV16i1DvLTNCgsmD0tRPBcfTWOUSf%2B%2Bv8Q%2FztkEi8zcOCB2xileQPrPrz7PEUr%2FevEdFcRWjex532ouWFMRS9MXVARUEKXqweAChj7ZUUkjbotp56OPc5cttknC%2BDmUvWYU6NWAyz6W8xMeCv6kahoK%2BjO%2FRV2b%2FU3V5aTK4rGS7dz0KUpnM%2FMKEev588BACgSCbrf5IUzJJ9dNDYZ0L924e%2BDgt6rAv42iR6ND5JWbR2PmYfJWFWYgXgTg%2BK8FnvbQiJcn3Nk5nKnJvlL%2F9qyDTdlHX1esc%2FinCRLo%2BgRS12gdZvn9vzxzTj6KHQIO1zPC6kMPg2Ice4Vnj5Js7uu7q5fKH6t1jr0Dxi9M0EpzWEO8wjDjbQOTcJNarWDbaOWSfYS0ETdb1zmfr3y5nJZemMP%2Feh8oGOqUBiE8II155WDVZBlVC7FJMkG5Ub151Nc3aGcdPDm0PSTVzIRVvtm1pyvi%2FaB1%2F%2B7iwDLBcsMznUVfdgGtDjMDyCdjB7N%2BiyxMRQyt8k0ZZbupBU9y73xpdfwqsdJvvtZsUTX9t6TNkAhL2Hw72fiaW4OlVFNBDhSrqs1Z1nXQ5I1hi8M2LjTmUVzjAeNQ5ftnmAyww51ua2FLPpu1J6Ok8Q479yDPE&X-Amz-Signature=c1de1029867308a930b2cc930a2e759ea1485bf3a559107d33c52efb0a6dc69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6BFFCKV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc6MeW%2BuTTW6DJQnfX7pT9LYQ4aFSwsrnEpjj56IpQAgIgG%2BUPXSsXx9MG5WTVZlnwzNqQiQdTIwT6s5mhUjyIygwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHVVgdlnj34s9a18xircA9M3RGZxinmVy58TXRqu6hN7%2BNhFwME1AR48KG%2FfxHd82Fsqw%2Bj5nT0ePUzpQFUKpLKz%2Bra%2FMT9eaFkF8Atg2%2BV%2BViBzJAzBlP8pALl7v2O8MFowkzT9tEDoaKtBMOVghsuHxavwH3ypgMK3KSAPvcsXlupA63YE9XQNFvf4lisfHex7RxpyFbVbWxs89eI%2Bcmci9pm%2BmHsTi12GTweNLQGDw2AfkACgbfBlUV16i1DvLTNCgsmD0tRPBcfTWOUSf%2B%2Bv8Q%2FztkEi8zcOCB2xileQPrPrz7PEUr%2FevEdFcRWjex532ouWFMRS9MXVARUEKXqweAChj7ZUUkjbotp56OPc5cttknC%2BDmUvWYU6NWAyz6W8xMeCv6kahoK%2BjO%2FRV2b%2FU3V5aTK4rGS7dz0KUpnM%2FMKEev588BACgSCbrf5IUzJJ9dNDYZ0L924e%2BDgt6rAv42iR6ND5JWbR2PmYfJWFWYgXgTg%2BK8FnvbQiJcn3Nk5nKnJvlL%2F9qyDTdlHX1esc%2FinCRLo%2BgRS12gdZvn9vzxzTj6KHQIO1zPC6kMPg2Ice4Vnj5Js7uu7q5fKH6t1jr0Dxi9M0EpzWEO8wjDjbQOTcJNarWDbaOWSfYS0ETdb1zmfr3y5nJZemMP%2Feh8oGOqUBiE8II155WDVZBlVC7FJMkG5Ub151Nc3aGcdPDm0PSTVzIRVvtm1pyvi%2FaB1%2F%2B7iwDLBcsMznUVfdgGtDjMDyCdjB7N%2BiyxMRQyt8k0ZZbupBU9y73xpdfwqsdJvvtZsUTX9t6TNkAhL2Hw72fiaW4OlVFNBDhSrqs1Z1nXQ5I1hi8M2LjTmUVzjAeNQ5ftnmAyww51ua2FLPpu1J6Ok8Q479yDPE&X-Amz-Signature=10082ad3e843576f575089c0015df013b6fbd329b948671a59f8171adda29bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

