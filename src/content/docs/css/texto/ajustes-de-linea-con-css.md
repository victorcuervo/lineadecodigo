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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEJK6QQ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzwMvKkxL2s15LvGYzUblcVvsouWogRa7pC3CH7APJ%2FAIhAMKSdMXHiROB6z25q%2BGWQtmAjDg%2Bgw8kSS6aNTcO%2BBdEKv8DCH8QABoMNjM3NDIzMTgzODA1Igw7QWihlXgCrCYHhuwq3AM%2F5eRzd%2F41R3gUthzIhS1VTK7l2qFjL%2BbzyXkTSqZ6s7fOyE%2BQMFg1XAWB%2BmewcWsyGsrvIajXciEYoZm%2BWnoCbJvQHQwPCp9hAS%2BOpJMcO4Kx3VFw%2FD%2Bq67tX4UeRnlKjPQYObIP%2F4VcxNX6N7Ry2sw3upLryzcO2Zs0h5eS%2BhKrk8gG%2F0T86taLvfSByWtuk450gx6L341H7cLmRCY3uYkXkfpYG2oPIbMsKWbRNu9sfWVzwEXE7Mr%2FcMIQ6oV1Zlcx4RSGfyY73oH4Gz%2B1aQ7%2Bg9OCAxb2Xskuw7Zj0mSYDks0EJ7%2Bmlmk0i8c3hPDYYYXk8UbbGv0Rplh6CbKd1l2Q8mzC5vurEDh5qeanNEx3GmqkMi6j95ZDapVDczjJ5PEVobU%2FCD%2F7I9LldDrdRxrrjsYqjQlDa98%2Fn0DxCw7OnJIzpsnpMtz5JEhUD%2BRHAtNmzRysR2K3YhpU7srRewqRaqqVwOc3TF6jDCmYWg%2BhTMA6Vb10i9Z9d%2FZ4aU4n5Zb2fu787u4f%2BWuruZ5uDiHpq3qmFWmRxrJs2ejcE1ReApmJAUnxtdfD85UnydKLnS713TVXzYkHlioBWdx%2FVgK7cYp3MabxSzNg5IapAuVjeI8hYCgi0Al81TDC4YrKBjqkAWecQdPT%2FY2xXnZYikJsbqpgkxxFKvUoe5x3fPsdTmAhQwmcGDRwPWHM%2BJrBgZuNm38R%2FXX1Jn0k4L0PFMd7V3lzbQhE7dIpkecpcodcpysNW%2B1cZXZsFpdy99YAvjCU9EJ91ymp5sZmVfPc6iaZ41cHJZvz%2BFeqXBBm3oSzPwdL0Zyl27mUxIeWo6cmf9X6gIEMKZ20LxQL1UAnyCiX6bXVnkaZ&X-Amz-Signature=850251158b910071433cc82a91e3b01b00faa56d5f603f70193a1a8fa7c9a07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEJK6QQ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzwMvKkxL2s15LvGYzUblcVvsouWogRa7pC3CH7APJ%2FAIhAMKSdMXHiROB6z25q%2BGWQtmAjDg%2Bgw8kSS6aNTcO%2BBdEKv8DCH8QABoMNjM3NDIzMTgzODA1Igw7QWihlXgCrCYHhuwq3AM%2F5eRzd%2F41R3gUthzIhS1VTK7l2qFjL%2BbzyXkTSqZ6s7fOyE%2BQMFg1XAWB%2BmewcWsyGsrvIajXciEYoZm%2BWnoCbJvQHQwPCp9hAS%2BOpJMcO4Kx3VFw%2FD%2Bq67tX4UeRnlKjPQYObIP%2F4VcxNX6N7Ry2sw3upLryzcO2Zs0h5eS%2BhKrk8gG%2F0T86taLvfSByWtuk450gx6L341H7cLmRCY3uYkXkfpYG2oPIbMsKWbRNu9sfWVzwEXE7Mr%2FcMIQ6oV1Zlcx4RSGfyY73oH4Gz%2B1aQ7%2Bg9OCAxb2Xskuw7Zj0mSYDks0EJ7%2Bmlmk0i8c3hPDYYYXk8UbbGv0Rplh6CbKd1l2Q8mzC5vurEDh5qeanNEx3GmqkMi6j95ZDapVDczjJ5PEVobU%2FCD%2F7I9LldDrdRxrrjsYqjQlDa98%2Fn0DxCw7OnJIzpsnpMtz5JEhUD%2BRHAtNmzRysR2K3YhpU7srRewqRaqqVwOc3TF6jDCmYWg%2BhTMA6Vb10i9Z9d%2FZ4aU4n5Zb2fu787u4f%2BWuruZ5uDiHpq3qmFWmRxrJs2ejcE1ReApmJAUnxtdfD85UnydKLnS713TVXzYkHlioBWdx%2FVgK7cYp3MabxSzNg5IapAuVjeI8hYCgi0Al81TDC4YrKBjqkAWecQdPT%2FY2xXnZYikJsbqpgkxxFKvUoe5x3fPsdTmAhQwmcGDRwPWHM%2BJrBgZuNm38R%2FXX1Jn0k4L0PFMd7V3lzbQhE7dIpkecpcodcpysNW%2B1cZXZsFpdy99YAvjCU9EJ91ymp5sZmVfPc6iaZ41cHJZvz%2BFeqXBBm3oSzPwdL0Zyl27mUxIeWo6cmf9X6gIEMKZ20LxQL1UAnyCiX6bXVnkaZ&X-Amz-Signature=9008c3d3d40c794f61b40088cdf95113cc74130f298d78fd76a4f4d887f14d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

