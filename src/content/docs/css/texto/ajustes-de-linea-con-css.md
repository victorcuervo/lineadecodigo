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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ZUXCIG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnnifmzOoDFwvhqdi4UjdWxO93FF1oJm4VSfus6N75kwIhAPTuDJ9NJLJmi%2BGM0WFZ8HNdvr8OxbLWBYVNjNRHADWMKv8DCHcQABoMNjM3NDIzMTgzODA1IgzO61dpYH94s%2BVNpmIq3AP7t5ySBV1r3Q4jToOZ6hXv1QzC%2F7rh6tsuRvx5Wnz4suFpLpTnpnLQ31DY3sb5%2BJlHlFZ5K9gr7D%2F%2BsztL7%2FwryKDaui6C%2B6F0UI1WTrcn08ssoRiIJm2aLfiOOuWL%2BLup%2F%2BrejZCexa1W6iUbOxfHBOmvei2WYjamgsUAgAM7%2BpLisQloWbQ4Bua1jFCpdwVlLWfRTGvYAfzx8VrDkQ%2BjQAlAAwyXBEk0DYnBw2RU1Ke3f44V8yN%2FBFg7fGAJMX8jfzIqhrRj%2F51RrksSYWkI9RlTLJLHyu4J92lg77qblBAcU3iNHt852x0QB4C1bRgTMYrucLn3AN9LxnDfqEt7oXJnaAWgcv2gaeHBxS9D%2B0laMLM2H24TAtLDmV4CtmiE4i0aWgX61mIIDG8Frcyplk2uxHSZcT3Pfy72xhQlUH4pe6QzFDsTmNbP9iNgKu8uYHH5M6LRZ43JA4VTMMBJWDt4oh4MvGCqzO%2BwZ1XvNg%2BPliJeCVnkIlv%2FooWgX037BFNmVevdTZ2bJc7K98YeVXBwy3tCvT5SDr8D0%2F1HSa%2B7lDVzt4Y9ixr6ehkML1UIbhXlQ%2BYHL0FI%2BMdljvzPV2LW2KvrYMZwoPpMHj9QcOo6XBFqoRMMZ4Bz6jDygYnKBjqkAU7rpqR4HPMy7XP83HwikQZItVKYXzHNXO7fcPV2XKWOCkFoXbbt2DBBIQgVO%2FnEEC1NPaC6onq7T4nhRkALUB1TU2k6J1Qy6SKbO%2Fu2oQ51uaftjgy1Pt4veQOw9Vax4PNWEc%2BiItMk8vRH2Dbel81loO9tR8qEkwhrMR3S%2Fgx8adOPv%2Fi9g0l32zl644KrwRD4tMPwNgi1ACT2Ak65lKrWQoy6&X-Amz-Signature=701192013f1d441bc159212111bddcd7fa0b810c630ca2a8fb10f21043dd6234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642ZUXCIG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnnifmzOoDFwvhqdi4UjdWxO93FF1oJm4VSfus6N75kwIhAPTuDJ9NJLJmi%2BGM0WFZ8HNdvr8OxbLWBYVNjNRHADWMKv8DCHcQABoMNjM3NDIzMTgzODA1IgzO61dpYH94s%2BVNpmIq3AP7t5ySBV1r3Q4jToOZ6hXv1QzC%2F7rh6tsuRvx5Wnz4suFpLpTnpnLQ31DY3sb5%2BJlHlFZ5K9gr7D%2F%2BsztL7%2FwryKDaui6C%2B6F0UI1WTrcn08ssoRiIJm2aLfiOOuWL%2BLup%2F%2BrejZCexa1W6iUbOxfHBOmvei2WYjamgsUAgAM7%2BpLisQloWbQ4Bua1jFCpdwVlLWfRTGvYAfzx8VrDkQ%2BjQAlAAwyXBEk0DYnBw2RU1Ke3f44V8yN%2FBFg7fGAJMX8jfzIqhrRj%2F51RrksSYWkI9RlTLJLHyu4J92lg77qblBAcU3iNHt852x0QB4C1bRgTMYrucLn3AN9LxnDfqEt7oXJnaAWgcv2gaeHBxS9D%2B0laMLM2H24TAtLDmV4CtmiE4i0aWgX61mIIDG8Frcyplk2uxHSZcT3Pfy72xhQlUH4pe6QzFDsTmNbP9iNgKu8uYHH5M6LRZ43JA4VTMMBJWDt4oh4MvGCqzO%2BwZ1XvNg%2BPliJeCVnkIlv%2FooWgX037BFNmVevdTZ2bJc7K98YeVXBwy3tCvT5SDr8D0%2F1HSa%2B7lDVzt4Y9ixr6ehkML1UIbhXlQ%2BYHL0FI%2BMdljvzPV2LW2KvrYMZwoPpMHj9QcOo6XBFqoRMMZ4Bz6jDygYnKBjqkAU7rpqR4HPMy7XP83HwikQZItVKYXzHNXO7fcPV2XKWOCkFoXbbt2DBBIQgVO%2FnEEC1NPaC6onq7T4nhRkALUB1TU2k6J1Qy6SKbO%2Fu2oQ51uaftjgy1Pt4veQOw9Vax4PNWEc%2BiItMk8vRH2Dbel81loO9tR8qEkwhrMR3S%2Fgx8adOPv%2Fi9g0l32zl644KrwRD4tMPwNgi1ACT2Ak65lKrWQoy6&X-Amz-Signature=5618720006a879d2184e60bce442d8c664d1735928df10214e8b300261fc901d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

