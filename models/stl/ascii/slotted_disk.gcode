; generated by Slic3r 1.2.9 on 2016-02-01 at 10:07:34

; external perimeters extrusion width = 0.50mm
; perimeters extrusion width = 0.72mm
; infill extrusion width = 0.72mm
; solid infill extrusion width = 0.72mm
; top infill extrusion width = 0.72mm

M107
M104 S200 ; set temperature
G28 ; home all axes
G1 Z5 F5000 ; lift nozzle

M109 S200 ; wait for temperature to be reached
G21 ; set units to millimeters
G90 ; use absolute coordinates
M82 ; use absolute distances for extrusion
G92 E0
G1 Z0.350 F7800.000
G1 E-2.00000 F2400.00000
G92 E0
G1 X94.891 Y95.036 F7800.000
G1 E2.00000 F2400.00000
G1 X95.713 Y94.311 E2.03391 F600.000
G1 X96.654 Y93.711 E2.06845
G1 X97.706 Y93.256 E2.10393
G1 X98.897 Y92.963 E2.14188
G1 X99.693 Y92.882 E2.16663
G1 X100.291 Y92.881 E2.18515
G1 X101.182 Y92.975 E2.21287 F600.000
G1 X102.294 Y93.256 E2.24834
G1 X103.346 Y93.711 E2.28381
G1 X104.311 Y94.330 E2.31928
G1 X105.165 Y95.095 E2.35475
G1 X105.885 Y95.987 E2.39022
G1 X106.453 Y96.983 E2.42569
G1 X106.831 Y97.980 E2.45868
G1 X107.029 Y98.839 E2.48597
G1 X107.121 Y100.060 E2.52386
G1 X107.074 Y100.848 E2.54830
G1 X106.987 Y101.385 E2.56513
G1 X106.675 Y102.488 E2.60060
G1 X106.189 Y103.527 E2.63608
G1 X105.492 Y104.536 E2.67402
G1 X104.694 Y105.358 E2.70949
G1 X103.773 Y106.042 E2.74497
G1 X102.755 Y106.569 E2.78044
G1 X101.666 Y106.926 E2.81591
G1 X100.533 Y107.103 E2.85138
G1 X99.387 Y107.097 E2.88685
G1 X98.256 Y106.907 E2.92232
G1 X97.171 Y106.537 E2.95779
G1 X96.159 Y105.999 E2.99326
G1 X95.246 Y105.305 E3.02873
G1 X94.508 Y104.536 E3.06172
G1 X93.851 Y103.597 E3.09719
G1 X93.354 Y102.564 E3.13266
G1 X93.013 Y101.385 E3.17062
G1 X92.920 Y100.798 E3.18902
G1 X92.879 Y100.060 E3.21188
G1 X92.964 Y98.880 E3.24850
G1 X93.169 Y97.979 E3.27707
G1 X93.582 Y96.910 E3.31254
G1 X94.161 Y95.920 E3.34801
G1 X94.839 Y95.091 E3.38116
G1 E1.38116 F2400.00000
G92 E0
M104 S0 ; turn off temperature
G28 X0  ; home X axis
M84     ; disable motors

; filament used = 1.4mm (0.0cm3)

; avoid_crossing_perimeters = 0
; bed_shape = 0x0,200x0,200x200,0x200
; bed_temperature = 0
; before_layer_gcode = 
; bridge_acceleration = 0
; bridge_fan_speed = 100
; brim_width = 0
; complete_objects = 0
; cooling = 1
; default_acceleration = 0
; disable_fan_first_layers = 3
; duplicate_distance = 6
; end_gcode = M104 S0 ; turn off temperature\nG28 X0  ; home X axis\nM84     ; disable motors\n
; extruder_clearance_height = 20
; extruder_clearance_radius = 20
; extruder_offset = 0x0
; extrusion_axis = E
; extrusion_multiplier = 1
; fan_always_on = 0
; fan_below_layer_time = 60
; filament_colour = #FFFFFF
; filament_diameter = 3
; first_layer_acceleration = 0
; first_layer_bed_temperature = 0
; first_layer_extrusion_width = 200%
; first_layer_speed = 30
; first_layer_temperature = 200
; gcode_arcs = 0
; gcode_comments = 0
; gcode_flavor = reprap
; infill_acceleration = 0
; infill_first = 0
; layer_gcode = 
; max_fan_speed = 100
; max_print_speed = 80
; max_volumetric_speed = 0
; min_fan_speed = 35
; min_print_speed = 10
; min_skirt_length = 0
; notes = 
; nozzle_diameter = 0.5
; only_retract_when_crossing_perimeters = 1
; ooze_prevention = 0
; output_filename_format = [input_filename_base].gcode
; perimeter_acceleration = 0
; post_process = 
; pressure_advance = 0
; resolution = 0
; retract_before_travel = 2
; retract_layer_change = 0
; retract_length = 2
; retract_length_toolchange = 10
; retract_lift = 0
; retract_restart_extra = 0
; retract_restart_extra_toolchange = 0
; retract_speed = 40
; skirt_distance = 6
; skirt_height = 1
; skirts = 1
; slowdown_below_layer_time = 5
; spiral_vase = 0
; standby_temperature_delta = -5
; start_gcode = G28 ; home all axes\nG1 Z5 F5000 ; lift nozzle\n
; temperature = 200
; threads = 2
; toolchange_gcode = 
; travel_speed = 130
; use_firmware_retraction = 0
; use_relative_e_distances = 0
; use_volumetric_e = 0
; vibration_limit = 0
; wipe = 0
; z_offset = 0
; dont_support_bridges = 1
; extrusion_width = 0
; first_layer_height = 0.35
; infill_only_where_needed = 0
; interface_shells = 0
; layer_height = 0.3
; raft_layers = 0
; seam_position = aligned
; support_material = 0
; support_material_angle = 0
; support_material_contact_distance = 0.2
; support_material_enforce_layers = 0
; support_material_extruder = 1
; support_material_extrusion_width = 0
; support_material_interface_extruder = 1
; support_material_interface_layers = 3
; support_material_interface_spacing = 0
; support_material_interface_speed = 100%
; support_material_pattern = pillars
; support_material_spacing = 2.5
; support_material_speed = 60
; support_material_threshold = 0
; xy_size_compensation = 0
; bottom_solid_layers = 3
; bridge_flow_ratio = 1
; bridge_speed = 60
; external_fill_pattern = rectilinear
; external_perimeter_extrusion_width = 0
; external_perimeter_speed = 50%
; external_perimeters_first = 0
; extra_perimeters = 1
; fill_angle = 45
; fill_density = 20%
; fill_pattern = honeycomb
; gap_fill_speed = 20
; infill_every_layers = 1
; infill_extruder = 1
; infill_extrusion_width = 0
; infill_overlap = 15%
; infill_speed = 80
; overhangs = 1
; perimeter_extruder = 1
; perimeter_extrusion_width = 0
; perimeter_speed = 60
; perimeters = 3
; small_perimeter_speed = 15
; solid_infill_below_area = 70
; solid_infill_every_layers = 0
; solid_infill_extruder = 1
; solid_infill_extrusion_width = 0
; solid_infill_speed = 20
; thin_walls = 1
; top_infill_extrusion_width = 0
; top_solid_infill_speed = 15
; top_solid_layers = 3