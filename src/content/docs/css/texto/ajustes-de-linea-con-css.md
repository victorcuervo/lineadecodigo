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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKD47JZW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaqtn16Nj%2FbAn1ZDXSVBfGh5LwyZDCnFWEnsS74JaPqAiEAzQYT8bq0DJfx2RXoiHMT34Q8EVf7NPyQYPsF4bogwnkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLfc%2BobbwYtskSOGxSrcA25lrn6LxHuVSBCZIJjaeLwp68u5fpvEk1q4ppIjlz8GrHbdUmkDQNc3f9PGlSZuZCiOunseAi8r8XrOoqDShcbuPto2kkyAp5R%2FdwFRXHkO%2BNUSOtz%2FhSItiZqIrC3lMIDinJ0I4%2FrIUwKZWK%2BesmLlyI6C8ftS5B8vRXTPXURsDMpcS48pAEDoDOXV3QYENf5mA48TPJkvjSITCIJ4n4AMT4vDD%2F%2F05s%2Frx5x3RAJoAld5NK%2Bo04sLr%2F0uTtaouWGe9Q%2FkeMMavt0y1sjzc6ma8vwXUDV60Hv1FONoFpt%2BLP5wFtdCPtIw7i7cKBf9AcbLuabbnHNw8BkPJuYg%2FLCWlKefnmXS7pg7PHVRsM%2FCYiCr2puPN%2FdEOT1f106BPfijhTG2GFeBtF%2BeX2J8esIeVzhkcDHDVpQPfovO8dhE27ysp02IpJZh%2FXKyXyePwqiTBClr6fMJQXQKLXlpviCFM5yPCg0Oj1ciYACatHjQ046Vg0NTRxPwo%2BmbiFQv3XwJg65eARWn2oYBGpFlEmcXPIJUw2G0uk0un%2FUICHYZ%2FwwMPDkBXYgcqlnjZzB5PlO8%2BxR5c4orAEBLtlr8YvW%2FK5c6eKBEpB8haV02ahljBk50mbagfRf9IbZlMLC4icoGOqUBhKiZXwtEM0JTkPkkW6lhwikfa%2BhgaiHxyEXxadBowaJVSdRCO0VSNe%2FNVBiy0RGM9hDXoVkFA0JvvGs1uNoH6Duoi9kaS37c8w99QD%2BMLstJC5BmS8aA93KYjOvz3kpJKNG%2BxC65ULB07GwCrBltsirHocOzIHzWN4v8PL0lj994ZlcdQ2WPzri1d4HesD6F2MxTXFd1B844biVE2mIF1nQNyBZP&X-Amz-Signature=a406d747e111c94df802f2566ae5b5ab46c9034b5e2405e89ed2c8927ccd54cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKD47JZW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBaqtn16Nj%2FbAn1ZDXSVBfGh5LwyZDCnFWEnsS74JaPqAiEAzQYT8bq0DJfx2RXoiHMT34Q8EVf7NPyQYPsF4bogwnkq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLfc%2BobbwYtskSOGxSrcA25lrn6LxHuVSBCZIJjaeLwp68u5fpvEk1q4ppIjlz8GrHbdUmkDQNc3f9PGlSZuZCiOunseAi8r8XrOoqDShcbuPto2kkyAp5R%2FdwFRXHkO%2BNUSOtz%2FhSItiZqIrC3lMIDinJ0I4%2FrIUwKZWK%2BesmLlyI6C8ftS5B8vRXTPXURsDMpcS48pAEDoDOXV3QYENf5mA48TPJkvjSITCIJ4n4AMT4vDD%2F%2F05s%2Frx5x3RAJoAld5NK%2Bo04sLr%2F0uTtaouWGe9Q%2FkeMMavt0y1sjzc6ma8vwXUDV60Hv1FONoFpt%2BLP5wFtdCPtIw7i7cKBf9AcbLuabbnHNw8BkPJuYg%2FLCWlKefnmXS7pg7PHVRsM%2FCYiCr2puPN%2FdEOT1f106BPfijhTG2GFeBtF%2BeX2J8esIeVzhkcDHDVpQPfovO8dhE27ysp02IpJZh%2FXKyXyePwqiTBClr6fMJQXQKLXlpviCFM5yPCg0Oj1ciYACatHjQ046Vg0NTRxPwo%2BmbiFQv3XwJg65eARWn2oYBGpFlEmcXPIJUw2G0uk0un%2FUICHYZ%2FwwMPDkBXYgcqlnjZzB5PlO8%2BxR5c4orAEBLtlr8YvW%2FK5c6eKBEpB8haV02ahljBk50mbagfRf9IbZlMLC4icoGOqUBhKiZXwtEM0JTkPkkW6lhwikfa%2BhgaiHxyEXxadBowaJVSdRCO0VSNe%2FNVBiy0RGM9hDXoVkFA0JvvGs1uNoH6Duoi9kaS37c8w99QD%2BMLstJC5BmS8aA93KYjOvz3kpJKNG%2BxC65ULB07GwCrBltsirHocOzIHzWN4v8PL0lj994ZlcdQ2WPzri1d4HesD6F2MxTXFd1B844biVE2mIF1nQNyBZP&X-Amz-Signature=a417750e973e5c1d312721bffc555f44e1a9174036c4216ecae346b76cac4349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

