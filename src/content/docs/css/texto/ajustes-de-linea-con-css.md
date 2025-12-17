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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2V2H5D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGRPMF3uMTW04KI18WBaN17WFPw5jdchxKB2tpTpeN1AiEA%2Bkv585kKguU98Ql6llB8OjG%2BReVm8SKcpC6rQ%2FdxVesq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOw8mzEaKweq%2Bh4R%2BCrcA3RmS5BBJJ%2Be9uurJnj9gkiVusgCI5MMGENZGZGdSYPbA0hdTQEnWDWucvJaYuHEERjCIno6jpPAkWzuc%2FvbmmBoJel62jJKlFQMiv9IUjmbpUYEvFb6KcP7RODNDf9cX6TFUBBukJR74OHIqjJUSvdqAql7J4vxSu5nNc2qVCsDGUD1UZfZiDITFxzln8LCX7ZLGDhID0G4bGhOLCwambojbBTLjbZaFhZarqMAc8WTvn%2F%2F7ZB6g%2BWkOeGANmtGNN1Xf83FUbzW%2FEdhM%2BRPMdKC4wZGts3GgeOKKWQXXWGDDzj2aur7WMPntnuF%2FFy%2FYVSije1f2Jw2izPaorRc%2BtlBYihMYyDNkqWCsZqspK1NIcd%2B7ICKngIizTnNJIaezIF0oTE8rPGcWsp5wv1kSsXaFkKkNJyPPtbDPeBp7atvxjhvWMnaeL%2FYvWWDtf5DLp%2FAncbsIcw7lmhJm8%2BKvKtzSdgf8AQFhf4CgIExBltQRavTt1S5KM14vCtPbs450pZNQZVe7A6wE83533t8I2cGjUq%2FFgkl2a3xtyMCS%2BOk4%2FlpRWksM6YCSjpfOdFwi%2BkbBNMcndxN7X%2BCBpAy1vyiJbHyAnSzR48Upsr5v8XskcM8bElpFKEccM7BMMq3icoGOqUBioyz9mZDTbW58X7MY6qVbmSFt1D2FQYtB%2BbnjHBHYdxr7WpQK0R%2B1%2Fb4Rnq53sPqUX13AJFtAgwL90tgBI%2B1uE%2Fp3Vvwz1TFF8CayB2oSaFuNdO9b2MlGAxRr7d5IaKCjl8uIpwOvVt3KuWd8IrNvmVqrtkSlD3yPBv9qPTWfGd9hsz1EbC3QmKLmaR2SzBYr9a1VU%2BLUDHW4g22kLKonDWJYptv&X-Amz-Signature=044735b854d85531aa106f96d1019449643ff8ae2a3e19bd29798c67df5712a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2V2H5D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDGRPMF3uMTW04KI18WBaN17WFPw5jdchxKB2tpTpeN1AiEA%2Bkv585kKguU98Ql6llB8OjG%2BReVm8SKcpC6rQ%2FdxVesq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOw8mzEaKweq%2Bh4R%2BCrcA3RmS5BBJJ%2Be9uurJnj9gkiVusgCI5MMGENZGZGdSYPbA0hdTQEnWDWucvJaYuHEERjCIno6jpPAkWzuc%2FvbmmBoJel62jJKlFQMiv9IUjmbpUYEvFb6KcP7RODNDf9cX6TFUBBukJR74OHIqjJUSvdqAql7J4vxSu5nNc2qVCsDGUD1UZfZiDITFxzln8LCX7ZLGDhID0G4bGhOLCwambojbBTLjbZaFhZarqMAc8WTvn%2F%2F7ZB6g%2BWkOeGANmtGNN1Xf83FUbzW%2FEdhM%2BRPMdKC4wZGts3GgeOKKWQXXWGDDzj2aur7WMPntnuF%2FFy%2FYVSije1f2Jw2izPaorRc%2BtlBYihMYyDNkqWCsZqspK1NIcd%2B7ICKngIizTnNJIaezIF0oTE8rPGcWsp5wv1kSsXaFkKkNJyPPtbDPeBp7atvxjhvWMnaeL%2FYvWWDtf5DLp%2FAncbsIcw7lmhJm8%2BKvKtzSdgf8AQFhf4CgIExBltQRavTt1S5KM14vCtPbs450pZNQZVe7A6wE83533t8I2cGjUq%2FFgkl2a3xtyMCS%2BOk4%2FlpRWksM6YCSjpfOdFwi%2BkbBNMcndxN7X%2BCBpAy1vyiJbHyAnSzR48Upsr5v8XskcM8bElpFKEccM7BMMq3icoGOqUBioyz9mZDTbW58X7MY6qVbmSFt1D2FQYtB%2BbnjHBHYdxr7WpQK0R%2B1%2Fb4Rnq53sPqUX13AJFtAgwL90tgBI%2B1uE%2Fp3Vvwz1TFF8CayB2oSaFuNdO9b2MlGAxRr7d5IaKCjl8uIpwOvVt3KuWd8IrNvmVqrtkSlD3yPBv9qPTWfGd9hsz1EbC3QmKLmaR2SzBYr9a1VU%2BLUDHW4g22kLKonDWJYptv&X-Amz-Signature=07db8e1dc43c4170df6a9594c024eab90d2a07a2e58fb6661498b773a22518ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

