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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQVMXNV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0bRdQgFDRi9JPCG4VF5iJiaev%2FdbB5cIzhWCldJCJpAiEA8VISO0oGFowMY%2FLWoqHvDx7eUsL%2FiEbpqoc04Zo17ngq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAM6RwTzgyfDBE8XJCrcA9ncIuy4CN6xuHyEAtNwBVLvakWo8bF6HzST1B1uAQHVpcLsR6EXxTuOj0%2FQfgEiXg7ukxQDXtUxSG%2B5WaSuAZ%2FgyfTjrVznIKN6tXsfYmlJvO3sh0YdOtNhW7W2tkAsWwN9pErKHiKm1a711GC%2BALsjbS5oO09kH35LPJMSwtT%2FyrgonfGGBMpz0M1MlxG5TQqBSFYwg0bKQzhvSHIQdDoqqy7%2FSDgAzEIyj9LUGjIkKOiN4IAWihI%2BCGuppXwCq6b7PUoasoh1qX94e2DxyYjwcNpEWFURjU4ML64CKPm7Bc9tqVuuPGbviukh0YeiIGz7vE7SVC86LsuROmuC41ryipj3Udoro3iPkKFrx8uyMxW3P8dlacSftt%2BoiZdd%2FH1keQCgf47udOr6Lne6hA3EWYJAO5fd8phnTrhDFXaJK05K2tZdPrVX9WNy7qfdQf1wCWzM2eXi2lxcspRC5HpMYaKIv5kXC5AGSR5MscM471TjACNDWMiloCqW2Mo1RP49NB7LAXQeylqYNNMIaJNZ1OEP2kCjbQ5l%2Fz461MG9%2BH7k1l973jlfDsSI4bcyoGF7Ojo7w3E2TAHnakDY%2BPQfFSIsxmowGZ1u2lvbFmuFEZgiKKLLLd%2BG%2FJHhMOaWiMoGOqUBmfdE0%2BuEbvJmIJtp7V57HrW1Ydzed4ATnP6ZV%2BHb3Au1u9uKX2vtb9fsoMRKJZ%2B%2BRFyNurONRLLvevy7606KIxfnK%2FuK8wV8E58bZoxD66jentdHw7zBQMJZdl2ZblDbbZe3PpL%2B746w8END4Trsu%2BeYV3ggals5N3IYeGj8hXhrOh%2F1vSQpisVNjgp%2BXxJnCLcTce1uOdBVMKDWfMaV5GESNrA9&X-Amz-Signature=596c32ec46c6cab8dc01a9d70ffc783a86218a3b6bef44915d7bab7049e14153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQVMXNV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0bRdQgFDRi9JPCG4VF5iJiaev%2FdbB5cIzhWCldJCJpAiEA8VISO0oGFowMY%2FLWoqHvDx7eUsL%2FiEbpqoc04Zo17ngq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAM6RwTzgyfDBE8XJCrcA9ncIuy4CN6xuHyEAtNwBVLvakWo8bF6HzST1B1uAQHVpcLsR6EXxTuOj0%2FQfgEiXg7ukxQDXtUxSG%2B5WaSuAZ%2FgyfTjrVznIKN6tXsfYmlJvO3sh0YdOtNhW7W2tkAsWwN9pErKHiKm1a711GC%2BALsjbS5oO09kH35LPJMSwtT%2FyrgonfGGBMpz0M1MlxG5TQqBSFYwg0bKQzhvSHIQdDoqqy7%2FSDgAzEIyj9LUGjIkKOiN4IAWihI%2BCGuppXwCq6b7PUoasoh1qX94e2DxyYjwcNpEWFURjU4ML64CKPm7Bc9tqVuuPGbviukh0YeiIGz7vE7SVC86LsuROmuC41ryipj3Udoro3iPkKFrx8uyMxW3P8dlacSftt%2BoiZdd%2FH1keQCgf47udOr6Lne6hA3EWYJAO5fd8phnTrhDFXaJK05K2tZdPrVX9WNy7qfdQf1wCWzM2eXi2lxcspRC5HpMYaKIv5kXC5AGSR5MscM471TjACNDWMiloCqW2Mo1RP49NB7LAXQeylqYNNMIaJNZ1OEP2kCjbQ5l%2Fz461MG9%2BH7k1l973jlfDsSI4bcyoGF7Ojo7w3E2TAHnakDY%2BPQfFSIsxmowGZ1u2lvbFmuFEZgiKKLLLd%2BG%2FJHhMOaWiMoGOqUBmfdE0%2BuEbvJmIJtp7V57HrW1Ydzed4ATnP6ZV%2BHb3Au1u9uKX2vtb9fsoMRKJZ%2B%2BRFyNurONRLLvevy7606KIxfnK%2FuK8wV8E58bZoxD66jentdHw7zBQMJZdl2ZblDbbZe3PpL%2B746w8END4Trsu%2BeYV3ggals5N3IYeGj8hXhrOh%2F1vSQpisVNjgp%2BXxJnCLcTce1uOdBVMKDWfMaV5GESNrA9&X-Amz-Signature=02df60960b8e54cc3ae31980c04e94db3eb6e1fbe664a13b6f1035abe642bca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

