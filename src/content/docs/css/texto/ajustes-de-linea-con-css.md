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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNCXXS43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsvCJFobhuyrab3empLnY4O1ySMGJdCm4ehbNJpi5oHQIhAJSNTWANrK5%2BT7maOBlXox8Px7%2FB8iXQo%2FaHse6rtTGfKv8DCHYQABoMNjM3NDIzMTgzODA1IgwjHmnPgUgjUib3c1Qq3AOGw6WL2YLpq0e8UAqlg6k7s8f6mUrBEPzRKBvU9neKvcPhYtoxqL8ntPQkYYMfMvPLac3ekl2mYjuxC4s9YYOVoOSXHWDwRbQevIvkIlh3CasBkYAhp%2Bkbc5bmgjttCEv4KPhCEGF4bMH1iqqT8gdtT%2FtcTPamyRoy3J%2FvFGAMQETTC2qOIz9Cjzy3H9nkB12zqJVwB81WEnPZxHAyi1MHW8I3lSwL%2Bf8W7m%2FOlNFJW%2B6rf5MLKUBrg7bgVIxrlIQ279klA2khYZbZOBGeQhN5biV6rPV9xcAB8LnK66x5COL28jtXD0%2BLC%2FmMKGRNjvTUykBws0YDBGpB3vG6eOWyx9vZbZRlwB%2BdE6DK1a46xDICH3QepQrRkHsrlj8AU%2ByiCyqMlNzGRoN6cDcnSRu6eDSDPuOipZVLhkM3ete8J6jjMAz9hPTVKRvDZ8zT6oqTFUzJVGxK9b7jQiR1FTMIhL7D2qq6pfFD4rvn76zJ9hH10sB4PfgG0D%2BqqHn3p7zejWSUJCRwZZApTVW30IpfdJ2fLLTJcTefWTeLQnIdX5R8LfQVVJbKNyvJeJDzjFTVY7Jrb1dvO4O5WKtu%2BaQZwePpeQspf05jvwqLlZggXXEPFcY3OwUaCL80xDDy6YjKBjqkAfr4ChgLuE6iUT4e2gUUSxTTOySd0jXQ3ND6Z6flWTcDQd7lLMEdRlIw8NhDRr7OWGHjen%2FKIvgyqcMhrUPhtGGetTnZes7gsDvnkTH6PYkT%2BGv5Np0ARCsmY17ldeMDLYGCAbNgozzzmytO%2BWOxn1hqoxW6dTc%2B6f8mkSX5Ehjdkz4dt3hGY%2FmIeTjnMuOnSfj%2BABwDYzKqcZ507En6ww%2Fek63v&X-Amz-Signature=c25d00480c13f7d131269321fe094d0e4bf31fba89be90c665638aa75ff2e363&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNCXXS43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsvCJFobhuyrab3empLnY4O1ySMGJdCm4ehbNJpi5oHQIhAJSNTWANrK5%2BT7maOBlXox8Px7%2FB8iXQo%2FaHse6rtTGfKv8DCHYQABoMNjM3NDIzMTgzODA1IgwjHmnPgUgjUib3c1Qq3AOGw6WL2YLpq0e8UAqlg6k7s8f6mUrBEPzRKBvU9neKvcPhYtoxqL8ntPQkYYMfMvPLac3ekl2mYjuxC4s9YYOVoOSXHWDwRbQevIvkIlh3CasBkYAhp%2Bkbc5bmgjttCEv4KPhCEGF4bMH1iqqT8gdtT%2FtcTPamyRoy3J%2FvFGAMQETTC2qOIz9Cjzy3H9nkB12zqJVwB81WEnPZxHAyi1MHW8I3lSwL%2Bf8W7m%2FOlNFJW%2B6rf5MLKUBrg7bgVIxrlIQ279klA2khYZbZOBGeQhN5biV6rPV9xcAB8LnK66x5COL28jtXD0%2BLC%2FmMKGRNjvTUykBws0YDBGpB3vG6eOWyx9vZbZRlwB%2BdE6DK1a46xDICH3QepQrRkHsrlj8AU%2ByiCyqMlNzGRoN6cDcnSRu6eDSDPuOipZVLhkM3ete8J6jjMAz9hPTVKRvDZ8zT6oqTFUzJVGxK9b7jQiR1FTMIhL7D2qq6pfFD4rvn76zJ9hH10sB4PfgG0D%2BqqHn3p7zejWSUJCRwZZApTVW30IpfdJ2fLLTJcTefWTeLQnIdX5R8LfQVVJbKNyvJeJDzjFTVY7Jrb1dvO4O5WKtu%2BaQZwePpeQspf05jvwqLlZggXXEPFcY3OwUaCL80xDDy6YjKBjqkAfr4ChgLuE6iUT4e2gUUSxTTOySd0jXQ3ND6Z6flWTcDQd7lLMEdRlIw8NhDRr7OWGHjen%2FKIvgyqcMhrUPhtGGetTnZes7gsDvnkTH6PYkT%2BGv5Np0ARCsmY17ldeMDLYGCAbNgozzzmytO%2BWOxn1hqoxW6dTc%2B6f8mkSX5Ehjdkz4dt3hGY%2FmIeTjnMuOnSfj%2BABwDYzKqcZ507En6ww%2Fek63v&X-Amz-Signature=3d77bb52f5d005393be34a73a59f2cfabd566f43e68862344917786c4fb23856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

