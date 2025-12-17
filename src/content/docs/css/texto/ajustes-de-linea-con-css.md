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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXH6ZTUT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSSsJ9%2Bm9JTxe8zpqfQFn1e59histNvnlbuik5Z1DTNAiEAqKFZbeY9BRsf%2F0W8L9dT8xsarqBLY2G1lff1cblf0c0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAAFdVlpMdlej7urLCrcAzMwIsPOEdCK5vYsPk1wlE0eVKh6Nh53pUAEeCkF7eAwOt7EwAjxdk2sWK52qDngykcPi9ArjD%2BGdSj%2BnGQjRREvpBOfyrQkT%2BpQKfN59FJZgeMobF9F1vfXM3V6G7f2S6Y03mwD1KPNLiH5%2BBXbe3BWrTzxvEvNQVphPBFXaeiLp9tvJ4caX6gR6X2T4E4%2BYZwkJ%2FIrBpac7i9tbmeLmJaUuEJIITabFfbuGpPLEaMhQkCB4xDyy3MfF%2FqnGfbYv%2BDqwFpEzsOL9EAvlxo8S47wRPhtr7tGYn%2FH43vp4db%2Bv1UMprNeW4M3PZEIhXmbUyMj3o5s0a3A40LnqWR5NfgIFwd40O0mSZJHE8tEtMJbJYXvz3fGhZTbTlFYo1umi491YDmFEhGLx%2FDRua0%2BfmAk9xDsjNawxjLueoE1Jf2XAqBxOjeZk1Gp%2FbXiOaEqKHuEEE3DkpPg7N2oDHk%2B46psMPt4JY%2FDlezFUr8Hjb3hTMOm%2BRmWBJGkP4UmsB%2BDCxPoHxrdOPNXUxejfmvqT5Ge3ZKRHYkNjC%2Fr2YNm%2B0nGQ%2FOV5ak2tdXC32%2Bp0mcHT3hoUytT9zvb0L92vRSFf3SgGmiJx6kvHLFhd3J%2B%2B6qid%2F9ShrDnB%2BHa94PZMITqiMoGOqUB7h3R20%2BktymFX%2FRX5w87qCKeyheHMDvr1bzHCJlEmSzeDFaJpsqOOMOQJq31SVRJdbGuZZulUN4hcLvwEHO0ZT8GCwJwyJ9VPpamO%2FtWR5Zya76BoJCjlROAVny%2BlPhA%2FWw4niFetkh9spoOiAcl7wdP2d8BBK7TJKdCwCufSZ1C9xZypfEJvSLHG%2FYWyG4E45QZvZOQyGkTbLlmeCUk%2BLQ6DHGm&X-Amz-Signature=0e5384409ebfe8860b9b758ff0e5ac956e2c38b2cad337120bd615cd79679d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXH6ZTUT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSSsJ9%2Bm9JTxe8zpqfQFn1e59histNvnlbuik5Z1DTNAiEAqKFZbeY9BRsf%2F0W8L9dT8xsarqBLY2G1lff1cblf0c0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAAFdVlpMdlej7urLCrcAzMwIsPOEdCK5vYsPk1wlE0eVKh6Nh53pUAEeCkF7eAwOt7EwAjxdk2sWK52qDngykcPi9ArjD%2BGdSj%2BnGQjRREvpBOfyrQkT%2BpQKfN59FJZgeMobF9F1vfXM3V6G7f2S6Y03mwD1KPNLiH5%2BBXbe3BWrTzxvEvNQVphPBFXaeiLp9tvJ4caX6gR6X2T4E4%2BYZwkJ%2FIrBpac7i9tbmeLmJaUuEJIITabFfbuGpPLEaMhQkCB4xDyy3MfF%2FqnGfbYv%2BDqwFpEzsOL9EAvlxo8S47wRPhtr7tGYn%2FH43vp4db%2Bv1UMprNeW4M3PZEIhXmbUyMj3o5s0a3A40LnqWR5NfgIFwd40O0mSZJHE8tEtMJbJYXvz3fGhZTbTlFYo1umi491YDmFEhGLx%2FDRua0%2BfmAk9xDsjNawxjLueoE1Jf2XAqBxOjeZk1Gp%2FbXiOaEqKHuEEE3DkpPg7N2oDHk%2B46psMPt4JY%2FDlezFUr8Hjb3hTMOm%2BRmWBJGkP4UmsB%2BDCxPoHxrdOPNXUxejfmvqT5Ge3ZKRHYkNjC%2Fr2YNm%2B0nGQ%2FOV5ak2tdXC32%2Bp0mcHT3hoUytT9zvb0L92vRSFf3SgGmiJx6kvHLFhd3J%2B%2B6qid%2F9ShrDnB%2BHa94PZMITqiMoGOqUB7h3R20%2BktymFX%2FRX5w87qCKeyheHMDvr1bzHCJlEmSzeDFaJpsqOOMOQJq31SVRJdbGuZZulUN4hcLvwEHO0ZT8GCwJwyJ9VPpamO%2FtWR5Zya76BoJCjlROAVny%2BlPhA%2FWw4niFetkh9spoOiAcl7wdP2d8BBK7TJKdCwCufSZ1C9xZypfEJvSLHG%2FYWyG4E45QZvZOQyGkTbLlmeCUk%2BLQ6DHGm&X-Amz-Signature=4111f0143e598fc92de214ea084d95b018adb4a36ed90417f228174686a89a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

