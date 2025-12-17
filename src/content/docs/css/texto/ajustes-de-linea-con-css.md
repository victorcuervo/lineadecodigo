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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DPDNZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNovpeG5hbJIuQse%2ByfhH8HWIxiPHbzrpVlwF%2F3WkpIAiEAjfsmWJ8cJwCXA0WyBv50kRMR%2FzCIHBZF2%2FvmX6CKAq0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDpLw%2BtEAx6dMSODSrcA%2BY1hyaNYGtHbLwdisOrIsQ3H4O2gWkphrSmqKoMFQGzSiL34vS2gWsQ9J0z%2FH%2FxDn9o%2FqPiS6K%2B9J3ic8%2BUIcbxf36HIBYaCi3sj%2B42vwxIEUCKtErGfD8I%2BkQo0d%2FGxnwlNORS1ehdZWqXhjFCfymaH58rKSN1YwXupK0ILB%2B1oE1cy6%2BaRoUK54C97TJG1bRtIszgN5vS%2B5FBfcAu%2FdvnbLaMUE9RgMtOyMKCM1aK48sbaOz2fPHUPib9XRefVAodIkW2cT6smrFxT17bpyxfojvj9PxenjfWXU8Ciw7QBXui37EGl5TOSSy7yfbPcWxFNjA1kUP2IVk4SeYfsiwnkDdIp29jW%2B5Y97zXlaGHvFlMXS2%2BHhFV60z2HvXbYAYGz1477YveToDAbTCA3mpYNhTL2pYKAfsBCTS4Kc1eRw4jOPacD3wuNPJlDnsa7Li5WV3qxGsriGnfoQ4BQIHGdA4JSwECOgVsiVWlMTxV98K2evmJY%2B13URp83SpfaTjS5ZmNa11FZ%2BuIH4qffZZpZZ3vQOOl8X8p9Emwl7KjFt2V%2B3ahkUWKHJ5I0X8mxDkvjvA2r45FiVfDjEb5P%2BnGi9wRbUcQT3JmprA0o18jhElcEvQYyPxYty%2BpMKegi8oGOqUBAcMBa9hVUpLJeGujtdLTfvEck%2Bfh8qYm3KfPshzUmyw5bT3S8MYyX6MDYsYZqBftqnppNCg8VMFMzKbC0K%2FjN2tiTyl%2BK3bzZ3auYTjAaEmHJjblMrWRPniduIiGh4vWYu%2BzViBd8any5SbEDg7thEo5NiQg3hNm7n46LtyKnrreHCPdAJlon8nqQHlW6n9osZk8ZhDg%2B2dt4IN%2B970%2F94zU0hT1&X-Amz-Signature=533a296bd8a66d59efa2a0ec74c49a6aa1b8cd310c64e20d4b97dccc9d57108a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DPDNZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNovpeG5hbJIuQse%2ByfhH8HWIxiPHbzrpVlwF%2F3WkpIAiEAjfsmWJ8cJwCXA0WyBv50kRMR%2FzCIHBZF2%2FvmX6CKAq0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHDpLw%2BtEAx6dMSODSrcA%2BY1hyaNYGtHbLwdisOrIsQ3H4O2gWkphrSmqKoMFQGzSiL34vS2gWsQ9J0z%2FH%2FxDn9o%2FqPiS6K%2B9J3ic8%2BUIcbxf36HIBYaCi3sj%2B42vwxIEUCKtErGfD8I%2BkQo0d%2FGxnwlNORS1ehdZWqXhjFCfymaH58rKSN1YwXupK0ILB%2B1oE1cy6%2BaRoUK54C97TJG1bRtIszgN5vS%2B5FBfcAu%2FdvnbLaMUE9RgMtOyMKCM1aK48sbaOz2fPHUPib9XRefVAodIkW2cT6smrFxT17bpyxfojvj9PxenjfWXU8Ciw7QBXui37EGl5TOSSy7yfbPcWxFNjA1kUP2IVk4SeYfsiwnkDdIp29jW%2B5Y97zXlaGHvFlMXS2%2BHhFV60z2HvXbYAYGz1477YveToDAbTCA3mpYNhTL2pYKAfsBCTS4Kc1eRw4jOPacD3wuNPJlDnsa7Li5WV3qxGsriGnfoQ4BQIHGdA4JSwECOgVsiVWlMTxV98K2evmJY%2B13URp83SpfaTjS5ZmNa11FZ%2BuIH4qffZZpZZ3vQOOl8X8p9Emwl7KjFt2V%2B3ahkUWKHJ5I0X8mxDkvjvA2r45FiVfDjEb5P%2BnGi9wRbUcQT3JmprA0o18jhElcEvQYyPxYty%2BpMKegi8oGOqUBAcMBa9hVUpLJeGujtdLTfvEck%2Bfh8qYm3KfPshzUmyw5bT3S8MYyX6MDYsYZqBftqnppNCg8VMFMzKbC0K%2FjN2tiTyl%2BK3bzZ3auYTjAaEmHJjblMrWRPniduIiGh4vWYu%2BzViBd8any5SbEDg7thEo5NiQg3hNm7n46LtyKnrreHCPdAJlon8nqQHlW6n9osZk8ZhDg%2B2dt4IN%2B970%2F94zU0hT1&X-Amz-Signature=f35b8cd98a454537e55f417568ca61d2c2040447c3951a8f9e7da2c371c18b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

