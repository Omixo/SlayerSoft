-- Seed counters (idempotent)
insert into counters (role, current_count, min_range, max_range) values
('CEO', 0, 1, 20)
on conflict (role) do nothing;

insert into counters (role, current_count, min_range, max_range) values
('MANAGER', 0, 101, 200)
on conflict (role) do nothing;

insert into counters (role, current_count, min_range, max_range) values
('HR', 0, 1001, 2000)
on conflict (role) do nothing;

insert into counters (role, current_count, min_range, max_range) values
('EMPLOYEE', 0, 2001, 10000)
on conflict (role) do nothing;

-- Seed slayer_access (idempotent)
insert into slayer_access (role, can_access, can_edit) values
('CEO', array['CEO','MANAGER','HR','EMPLOYEE'], array['MANAGER','HR','EMPLOYEE'])
on conflict do nothing;

insert into slayer_access (role, can_access, can_edit) values
('MANAGER', array['MANAGER','HR','EMPLOYEE'], array['HR','EMPLOYEE'])
on conflict do nothing;

insert into slayer_access (role, can_access, can_edit) values
('HR', array['HR','EMPLOYEE'], array['EMPLOYEE'])
on conflict do nothing;

insert into slayer_access (role, can_access, can_edit) values
('EMPLOYEE', array['EMPLOYEE'], array['EMPLOYEE'])
on conflict do nothing;