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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAIJABG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvHN%2B6etD6XrR2iorPy9CMzfCRmMYcRUf2mDRXQ1noAIgXJ4dn%2F9%2F3IXazFIBdIw0sSSgLnBM44UUoksVaauIM6YqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN44lsJvMSI9IUa9NSrcA48CSq63qx623bJouVe1x6sSkBy7hi8SDja%2BQaC1lwtArRHLcbiKom6v3otYi6UvcS6k2MDuvyomDVmmJ%2Frmmwc478U1iQ8zWesl1w1%2B%2Bqnck%2FfgOKRC733sW4EA%2FAj%2BwRXYIf%2BDm3RmfyNT2ap%2FSwKdR846melrb1QicrtynDl6j%2F5k%2FmoBr5QSiNNSkjpDwIguPQzgoLguzD6pf7PK8z47MVN8Y0PnTUFfapt2Y77Cbl89UJzDJEngfQFbu3OoDeLIEhnpPy2dNY5gydQjzLxH1pww4OMrdTbnb2Y0mWMlG03Fn0U35k0C4PWhH8xA%2BWve3mcfGL0o3DO%2BhlqP9CS2cGTdIOQZKJDGAObGpFbATJTZ7TFeGRExXTx3lL8BgNePARs9oZeyZV4D0oHBYlKHM9LxiNogi37vJthnK3hgNhTssjRX1OrglJndc%2BIDjp8wZTLDzXIShWUAhP7ybTpVPvv9i00enpfqn9t3UP35JcfcwBJlyNUW0nFiBvIRsmH4HQEpZamYexWoX1KlxtU7jNqR3KpyTTHEr0PRPiNtsH72b7ckoStaTGJwGOKRIwNY8SvkJvmYJYdE4ceYPMD%2BujxZCVLkFkZ%2FP1MGA0D%2BPMskJDGXieTnXl%2F6MPv%2FisoGOqUBhFAM%2BjtT6mSUuEbxGm15LfjqDYFcffLLsB1LP1jR12DzhRb%2F4DlwCxiCk5yQixM6u9cmosIuSClnf7CYjCtonCZoAC7Nd9xSvpn7Ma3yFasd4iKdlS5K%2B9BXShXWiLZZKGvPelu1OaVdfz7Er%2BpslRQZeTAuvD%2BlaFR64CqADCpVoiSYcYlIpoC%2BgqK3NVkxqdy87f3YqCzkNOtqDaXbhv5hu%2B5e&X-Amz-Signature=5f69319d2b8ac019c394505a89226fad192c71b77a8439718f82c0cbd181d179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAIJABG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHvHN%2B6etD6XrR2iorPy9CMzfCRmMYcRUf2mDRXQ1noAIgXJ4dn%2F9%2F3IXazFIBdIw0sSSgLnBM44UUoksVaauIM6YqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN44lsJvMSI9IUa9NSrcA48CSq63qx623bJouVe1x6sSkBy7hi8SDja%2BQaC1lwtArRHLcbiKom6v3otYi6UvcS6k2MDuvyomDVmmJ%2Frmmwc478U1iQ8zWesl1w1%2B%2Bqnck%2FfgOKRC733sW4EA%2FAj%2BwRXYIf%2BDm3RmfyNT2ap%2FSwKdR846melrb1QicrtynDl6j%2F5k%2FmoBr5QSiNNSkjpDwIguPQzgoLguzD6pf7PK8z47MVN8Y0PnTUFfapt2Y77Cbl89UJzDJEngfQFbu3OoDeLIEhnpPy2dNY5gydQjzLxH1pww4OMrdTbnb2Y0mWMlG03Fn0U35k0C4PWhH8xA%2BWve3mcfGL0o3DO%2BhlqP9CS2cGTdIOQZKJDGAObGpFbATJTZ7TFeGRExXTx3lL8BgNePARs9oZeyZV4D0oHBYlKHM9LxiNogi37vJthnK3hgNhTssjRX1OrglJndc%2BIDjp8wZTLDzXIShWUAhP7ybTpVPvv9i00enpfqn9t3UP35JcfcwBJlyNUW0nFiBvIRsmH4HQEpZamYexWoX1KlxtU7jNqR3KpyTTHEr0PRPiNtsH72b7ckoStaTGJwGOKRIwNY8SvkJvmYJYdE4ceYPMD%2BujxZCVLkFkZ%2FP1MGA0D%2BPMskJDGXieTnXl%2F6MPv%2FisoGOqUBhFAM%2BjtT6mSUuEbxGm15LfjqDYFcffLLsB1LP1jR12DzhRb%2F4DlwCxiCk5yQixM6u9cmosIuSClnf7CYjCtonCZoAC7Nd9xSvpn7Ma3yFasd4iKdlS5K%2B9BXShXWiLZZKGvPelu1OaVdfz7Er%2BpslRQZeTAuvD%2BlaFR64CqADCpVoiSYcYlIpoC%2BgqK3NVkxqdy87f3YqCzkNOtqDaXbhv5hu%2B5e&X-Amz-Signature=66cc3a544d05da8e5ca38e40302f5da1322b226a774cd044dc01d0994fc4f1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

