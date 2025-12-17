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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIYP65W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDvKGfr2rKt7kOlHoPKuAEf3eD5C6tUByVe00jZxkfmgIgSWnASwEGWBewRY%2FicCXDTNaJxDNPxylpgXtznAV6Sioq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMOPGnPsdax5cJTl7SrcAx5jtkHG4Nde%2B6V%2Fymr%2F8SqPBlz7yGuV5MiZejCmfFIqAdE5JOw0g8Rvz5rd2u2%2BILFMnXryw4Juqjn4B6bRABtS3QMipD%2F%2FyTn22n59EnyZ1qbAoAzU5zJNhYW8R2SXHv8msELN9RTE%2BB3mYr%2BHcM5j0lnhtTHo%2BXQI29GBdaK9cbyZdeLc9mYINqwnEthJQTh0Lygj5RMR0a%2FOZRsbP0DWAIiKwnD%2FrDvJXHACBihrLgroaIXN7IkB8KFzMt9uuqvAm1X%2BKYJBNwonSUWTNgUN6TcMl5Q61HvE9MKWDAy109l1SZmsS7yS1ujei6wVJCLvvG%2FCvSyT92kaAZbPWDSyf1qVlh2N0WZyjOWRSUFbp8cOZl3rPE7EGsRGnHsuWOd7JdkVkIlPACS8ubyZvwy0aXMOOfjqAto5vdcXll0t1DXf1hkJpA263fFzXBDWDWUj6yo4ZcKLdfLCdzRy%2FWBSQ23eLHJpTsgh6h8AtKF1U4rAZmpsavAq1N2A88SaW0uDVujC3pzlavo0u8MsoxqqGdzDDoG%2B%2FrHT2o6Uncg3hc9uBVybDBM%2BujqKEH06d1Vtid1J%2BJXQwFBMEVXsXLSD0hB5ZYatvnjWc58%2FA2sY4koWIwkcLEraFcuPMNCOisoGOqUBokuGVPsp6FcPXV4jHEBMORbdZFvkWVx2rx%2BIZia%2Bij0bbQVu9MbwOHegZsN9qCFPNxXicK37NWA4Cmv72fGEw5mO%2F0VDaih3AXg%2BcPy206SS1cfrru1d5mf9cOP5UU83%2Ffz%2BM%2Bzy6VY8XgOxzK9ELela%2FElivRLyjaEr7sagsoJ8KY7JWFKm5NfQeTKyIHGhlUHkGyPzijJaVsX7x41q6xsUa6Vz&X-Amz-Signature=085e65657328c4d029cc353c5cc880b8f2964b4f26517f2363379d4629c32a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDIYP65W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDvKGfr2rKt7kOlHoPKuAEf3eD5C6tUByVe00jZxkfmgIgSWnASwEGWBewRY%2FicCXDTNaJxDNPxylpgXtznAV6Sioq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMOPGnPsdax5cJTl7SrcAx5jtkHG4Nde%2B6V%2Fymr%2F8SqPBlz7yGuV5MiZejCmfFIqAdE5JOw0g8Rvz5rd2u2%2BILFMnXryw4Juqjn4B6bRABtS3QMipD%2F%2FyTn22n59EnyZ1qbAoAzU5zJNhYW8R2SXHv8msELN9RTE%2BB3mYr%2BHcM5j0lnhtTHo%2BXQI29GBdaK9cbyZdeLc9mYINqwnEthJQTh0Lygj5RMR0a%2FOZRsbP0DWAIiKwnD%2FrDvJXHACBihrLgroaIXN7IkB8KFzMt9uuqvAm1X%2BKYJBNwonSUWTNgUN6TcMl5Q61HvE9MKWDAy109l1SZmsS7yS1ujei6wVJCLvvG%2FCvSyT92kaAZbPWDSyf1qVlh2N0WZyjOWRSUFbp8cOZl3rPE7EGsRGnHsuWOd7JdkVkIlPACS8ubyZvwy0aXMOOfjqAto5vdcXll0t1DXf1hkJpA263fFzXBDWDWUj6yo4ZcKLdfLCdzRy%2FWBSQ23eLHJpTsgh6h8AtKF1U4rAZmpsavAq1N2A88SaW0uDVujC3pzlavo0u8MsoxqqGdzDDoG%2B%2FrHT2o6Uncg3hc9uBVybDBM%2BujqKEH06d1Vtid1J%2BJXQwFBMEVXsXLSD0hB5ZYatvnjWc58%2FA2sY4koWIwkcLEraFcuPMNCOisoGOqUBokuGVPsp6FcPXV4jHEBMORbdZFvkWVx2rx%2BIZia%2Bij0bbQVu9MbwOHegZsN9qCFPNxXicK37NWA4Cmv72fGEw5mO%2F0VDaih3AXg%2BcPy206SS1cfrru1d5mf9cOP5UU83%2Ffz%2BM%2Bzy6VY8XgOxzK9ELela%2FElivRLyjaEr7sagsoJ8KY7JWFKm5NfQeTKyIHGhlUHkGyPzijJaVsX7x41q6xsUa6Vz&X-Amz-Signature=b01d8e8536003f949715825f230fb7c644eab4304060078727497981b1a93ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

