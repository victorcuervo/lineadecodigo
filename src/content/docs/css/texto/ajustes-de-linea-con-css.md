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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642F5CIZM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLok7Pd7GvcgJk8B9YOzLf3FopZ0WUoj1qiyYqRUItTAiBZik5liCYMCvZVDsqz4Se35dXAAUxStwi92PKhohxeMyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgY65QGdwvYjAS%2BO0KtwDcbqDB6c0ZYB3sSsDHkpR1ZzrZJpBcH%2Bf7RI%2FfWP%2FQN7OvmupbY%2B1konVwXZ5OV9m3J0TnhAZgCEdzxG8FIP%2B28LQpvoz7GXFm1Xk1lXjtRWk5nD3T3KvfofsgPHLmSgjERpUVq8SQRsZGO%2BdWWEMJHcxNyKnDfKpYxr7Xjw%2BpDZDI7KbakfZ6Hs9K1o2M26XqRmmEp34KJWcqOLJLU87DUssFXYBKHwM0oEFDwlAi1yfI%2FgGUWYmkfssMt2hNRv5xIqLNG2%2BpX3G%2BG7%2B%2FsDg8L7uJ00BWSM67ybHf8gpbAVA7l2lxLe9RBjdyZZJKB8m20ZHM8%2BYSsGKM936wjyFY4B2DA3lnfcQ8%2BklWlhxrKqACrCnSVoe5bCGms%2Fjr9twdQxt%2FtRFWYvsAa9SBFOXTjd5jWoZELEtSSd4fZBllqd1CHbVUlYluz70QEErvCFcldqc%2F7yS6N7Zbe%2FEdofvRdL0LFiQG%2F1hIFgMUsNgZ7MbsEbT9XvtHtaMl3O%2B0TxNqR8HCcNA6R6uQhR6vWNR%2FsAk06gan8eeysjVWLNilPLhXQ0VdNE4uVM4URkSFcCKat4W3SO%2Bzh7wLaIH4MkxXMCBnjD2gerjGFwKUAkiXugBuC%2Fh8GmGRSYysoQw6oCLygY6pgG14Al%2F2ljZMlYlvC9RMBlmWc3aZJV6nlloHsd%2F6ah5fT5gkfMtecLA%2BZTt3NBEiSu%2BPf5B9hRSsAw1LAF4cep%2BYAgtUUkCFj3gXPj3QXr7kW2yA4a%2Bgh7qaCRZbcKTBIuiGEO6wRC58zn1Yjpu%2FjqiRyEEja8OnVqIyrqNvdQU7w7rw4tuDeNXbIY%2BqlOmwbhjt9mhNG8ObI71F2mfJh4u5FMYa08V&X-Amz-Signature=15c589615f42a02de39b72ab521f70eabe409de6120f2f4f37bea17178979086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642F5CIZM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLok7Pd7GvcgJk8B9YOzLf3FopZ0WUoj1qiyYqRUItTAiBZik5liCYMCvZVDsqz4Se35dXAAUxStwi92PKhohxeMyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgY65QGdwvYjAS%2BO0KtwDcbqDB6c0ZYB3sSsDHkpR1ZzrZJpBcH%2Bf7RI%2FfWP%2FQN7OvmupbY%2B1konVwXZ5OV9m3J0TnhAZgCEdzxG8FIP%2B28LQpvoz7GXFm1Xk1lXjtRWk5nD3T3KvfofsgPHLmSgjERpUVq8SQRsZGO%2BdWWEMJHcxNyKnDfKpYxr7Xjw%2BpDZDI7KbakfZ6Hs9K1o2M26XqRmmEp34KJWcqOLJLU87DUssFXYBKHwM0oEFDwlAi1yfI%2FgGUWYmkfssMt2hNRv5xIqLNG2%2BpX3G%2BG7%2B%2FsDg8L7uJ00BWSM67ybHf8gpbAVA7l2lxLe9RBjdyZZJKB8m20ZHM8%2BYSsGKM936wjyFY4B2DA3lnfcQ8%2BklWlhxrKqACrCnSVoe5bCGms%2Fjr9twdQxt%2FtRFWYvsAa9SBFOXTjd5jWoZELEtSSd4fZBllqd1CHbVUlYluz70QEErvCFcldqc%2F7yS6N7Zbe%2FEdofvRdL0LFiQG%2F1hIFgMUsNgZ7MbsEbT9XvtHtaMl3O%2B0TxNqR8HCcNA6R6uQhR6vWNR%2FsAk06gan8eeysjVWLNilPLhXQ0VdNE4uVM4URkSFcCKat4W3SO%2Bzh7wLaIH4MkxXMCBnjD2gerjGFwKUAkiXugBuC%2Fh8GmGRSYysoQw6oCLygY6pgG14Al%2F2ljZMlYlvC9RMBlmWc3aZJV6nlloHsd%2F6ah5fT5gkfMtecLA%2BZTt3NBEiSu%2BPf5B9hRSsAw1LAF4cep%2BYAgtUUkCFj3gXPj3QXr7kW2yA4a%2Bgh7qaCRZbcKTBIuiGEO6wRC58zn1Yjpu%2FjqiRyEEja8OnVqIyrqNvdQU7w7rw4tuDeNXbIY%2BqlOmwbhjt9mhNG8ObI71F2mfJh4u5FMYa08V&X-Amz-Signature=c5fc59cf2a66abb19b3fd11ab8bed86d57926e69b26195ebce62632b05f1672f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

